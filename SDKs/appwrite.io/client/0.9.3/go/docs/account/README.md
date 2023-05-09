# Account

## Overview

The Account service allows you to authenticate and manage a user account.

### Available Operations

* [AccountCreate](#accountcreate) - Create Account
* [AccountCreateAnonymousSession](#accountcreateanonymoussession) - Create Anonymous Session
* [AccountCreateJWT](#accountcreatejwt) - Create Account JWT
* [AccountCreateOAuth2Session](#accountcreateoauth2session) - Create Account Session with OAuth2
* [AccountCreateRecovery](#accountcreaterecovery) - Create Password Recovery
* [AccountCreateSession](#accountcreatesession) - Create Account Session
* [AccountCreateVerification](#accountcreateverification) - Create Email Verification
* [AccountDelete](#accountdelete) - Delete Account
* [AccountDeleteSession](#accountdeletesession) - Delete Account Session
* [AccountDeleteSessions](#accountdeletesessions) - Delete All Account Sessions
* [AccountGet](#accountget) - Get Account
* [AccountGetLogs](#accountgetlogs) - Get Account Logs
* [AccountGetPrefs](#accountgetprefs) - Get Account Preferences
* [AccountGetSession](#accountgetsession) - Get Session By ID
* [AccountGetSessions](#accountgetsessions) - Get Account Sessions
* [AccountUpdateEmail](#accountupdateemail) - Update Account Email
* [AccountUpdateName](#accountupdatename) - Update Account Name
* [AccountUpdatePassword](#accountupdatepassword) - Update Account Password
* [AccountUpdatePrefs](#accountupdateprefs) - Update Account Preferences
* [AccountUpdateRecovery](#accountupdaterecovery) - Complete Password Recovery
* [AccountUpdateVerification](#accountupdateverification) - Complete Email Verification

## AccountCreate

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](/docs/client/account#accountCreateVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](/docs/client/account#accountCreateSession).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreate(ctx, operations.AccountCreateRequestBody{
        Email: "Eli96@yahoo.com",
        Name: sdk.String("Laurie Kreiger"),
        Password: "voluptatum",
    }, operations.AccountCreateSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountCreateAnonymousSession

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](/docs/client/account#accountUpdateEmail) or create an [OAuth2 session](/docs/client/account#accountCreateOAuth2Session).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateAnonymousSession(ctx, operations.AccountCreateAnonymousSessionSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## AccountCreateJWT

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateJWT(ctx, operations.AccountCreateJWTSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Jwt != nil {
        // handle response
    }
}
```

## AccountCreateOAuth2Session

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user..


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateOAuth2Session(ctx, operations.AccountCreateOAuth2SessionRequest{
        Failure: sdk.String("iusto"),
        Provider: "excepturi",
        Scopes: []string{
            "recusandae",
            "temporibus",
        },
        Success: sdk.String("ab"),
    }, operations.AccountCreateOAuth2SessionSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AccountCreateRecovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateRecovery(ctx, operations.AccountCreateRecoveryRequestBody{
        Email: "Ashlee36@yahoo.com",
        URL: "repellendus",
    }, operations.AccountCreateRecoverySecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## AccountCreateSession

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateSession(ctx, operations.AccountCreateSessionRequestBody{
        Email: "Orlando_Connelly97@hotmail.com",
        Password: "molestiae",
    }, operations.AccountCreateSessionSecurity{
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## AccountCreateVerification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountCreateVerification(ctx, operations.AccountCreateVerificationRequestBody{
        URL: "quod",
    }, operations.AccountCreateVerificationSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## AccountDelete

Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountDelete(ctx, operations.AccountDeleteSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AccountDeleteSession

Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountDeleteSession(ctx, operations.AccountDeleteSessionRequest{
        SessionID: "quod",
    }, operations.AccountDeleteSessionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AccountDeleteSessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountDeleteSessions(ctx, operations.AccountDeleteSessionsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AccountGet

Get currently logged in user data as JSON object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountGet(ctx, operations.AccountGetSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountGetLogs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountGetLogs(ctx, operations.AccountGetLogsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LogList != nil {
        // handle response
    }
}
```

## AccountGetPrefs

Get currently logged in user preferences as a key-value object.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountGetPrefs(ctx, operations.AccountGetPrefsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Preferences != nil {
        // handle response
    }
}
```

## AccountGetSession

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountGetSession(ctx, operations.AccountGetSessionRequest{
        SessionID: "esse",
    }, operations.AccountGetSessionSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Session != nil {
        // handle response
    }
}
```

## AccountGetSessions

Get currently logged in user list of active sessions across different devices.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountGetSessions(ctx, operations.AccountGetSessionsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SessionList != nil {
        // handle response
    }
}
```

## AccountUpdateEmail

Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdateEmail(ctx, operations.AccountUpdateEmailRequestBody{
        Email: "Osborne72@yahoo.com",
        Password: "officia",
    }, operations.AccountUpdateEmailSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountUpdateName

Update currently logged in user account name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdateName(ctx, operations.AccountUpdateNameRequestBody{
        Name: "Wayne Lind",
    }, operations.AccountUpdateNameSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountUpdatePassword

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdatePassword(ctx, operations.AccountUpdatePasswordRequestBody{
        OldPassword: sdk.String("totam"),
        Password: "beatae",
    }, operations.AccountUpdatePasswordSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountUpdatePrefs

Update currently logged in user account preferences. You can pass only the specific settings you wish to update.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdatePrefs(ctx, operations.AccountUpdatePrefsRequestBody{
        Prefs: map[string]interface{}{
            "molestiae": "modi",
            "qui": "impedit",
        },
    }, operations.AccountUpdatePrefsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## AccountUpdateRecovery

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdateRecovery(ctx, operations.AccountUpdateRecoveryRequestBody{
        Password: "cum",
        PasswordAgain: "esse",
        Secret: "ipsum",
        UserID: "excepturi",
    }, operations.AccountUpdateRecoverySecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```

## AccountUpdateVerification

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AccountUpdateVerification(ctx, operations.AccountUpdateVerificationRequestBody{
        Secret: "aspernatur",
        UserID: "perferendis",
    }, operations.AccountUpdateVerificationSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
}
```
