# account

## Overview

The Account service allows you to authenticate and manage a user account.

### Available Operations

* [accountCreate](#accountcreate) - Create Account
* [accountCreateAnonymousSession](#accountcreateanonymoussession) - Create Anonymous Session
* [accountCreateJWT](#accountcreatejwt) - Create Account JWT
* [accountCreateOAuth2Session](#accountcreateoauth2session) - Create Account Session with OAuth2
* [accountCreateRecovery](#accountcreaterecovery) - Create Password Recovery
* [accountCreateSession](#accountcreatesession) - Create Account Session
* [accountCreateVerification](#accountcreateverification) - Create Email Verification
* [accountDelete](#accountdelete) - Delete Account
* [accountDeleteSession](#accountdeletesession) - Delete Account Session
* [accountDeleteSessions](#accountdeletesessions) - Delete All Account Sessions
* [accountGet](#accountget) - Get Account
* [accountGetLogs](#accountgetlogs) - Get Account Logs
* [accountGetPrefs](#accountgetprefs) - Get Account Preferences
* [accountGetSession](#accountgetsession) - Get Session By ID
* [accountGetSessions](#accountgetsessions) - Get Account Sessions
* [accountUpdateEmail](#accountupdateemail) - Update Account Email
* [accountUpdateName](#accountupdatename) - Update Account Name
* [accountUpdatePassword](#accountupdatepassword) - Update Account Password
* [accountUpdatePrefs](#accountupdateprefs) - Update Account Preferences
* [accountUpdateRecovery](#accountupdaterecovery) - Complete Password Recovery
* [accountUpdateVerification](#accountupdateverification) - Complete Email Verification

## accountCreate

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](/docs/client/account#accountCreateVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](/docs/client/account#accountCreateSession).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRequestBody;
import org.openapis.openapi.models.operations.AccountCreateResponse;
import org.openapis.openapi.models.operations.AccountCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRequestBody req = new AccountCreateRequestBody("vel", "error") {{
                name = "Rick Kertzmann";
            }};            

            AccountCreateResponse res = sdk.account.accountCreate(req, new AccountCreateSecurity("ipsa") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateAnonymousSession

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](/docs/client/account#accountUpdateEmail) or create an [OAuth2 session](/docs/client/account#accountCreateOAuth2Session).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateAnonymousSessionResponse;
import org.openapis.openapi.models.operations.AccountCreateAnonymousSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateAnonymousSessionResponse res = sdk.account.accountCreateAnonymousSession(new AccountCreateAnonymousSessionSecurity("delectus") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateJWT

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateJWTResponse;
import org.openapis.openapi.models.operations.AccountCreateJWTSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateJWTResponse res = sdk.account.accountCreateJWT(new AccountCreateJWTSecurity("tempora") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.jwt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateOAuth2Session

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user..


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateOAuth2SessionRequest;
import org.openapis.openapi.models.operations.AccountCreateOAuth2SessionResponse;
import org.openapis.openapi.models.operations.AccountCreateOAuth2SessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateOAuth2SessionRequest req = new AccountCreateOAuth2SessionRequest("suscipit") {{
                failure = "molestiae";
                scopes = new String[]{{
                    add("placeat"),
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                }};
                success = "nisi";
            }};            

            AccountCreateOAuth2SessionResponse res = sdk.account.accountCreateOAuth2Session(req, new AccountCreateOAuth2SessionSecurity("recusandae") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateRecovery

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountCreateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountCreateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateRecoveryRequestBody req = new AccountCreateRecoveryRequestBody("temporibus", "ab");            

            AccountCreateRecoveryResponse res = sdk.account.accountCreateRecovery(req, new AccountCreateRecoverySecurity("quis", "veritatis") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateSession

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateSessionRequestBody;
import org.openapis.openapi.models.operations.AccountCreateSessionResponse;
import org.openapis.openapi.models.operations.AccountCreateSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateSessionRequestBody req = new AccountCreateSessionRequestBody("deserunt", "perferendis");            

            AccountCreateSessionResponse res = sdk.account.accountCreateSession(req, new AccountCreateSessionSecurity("ipsam") {{
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountCreateVerification

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountCreateVerificationRequestBody;
import org.openapis.openapi.models.operations.AccountCreateVerificationResponse;
import org.openapis.openapi.models.operations.AccountCreateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountCreateVerificationRequestBody req = new AccountCreateVerificationRequestBody("repellendus");            

            AccountCreateVerificationResponse res = sdk.account.accountCreateVerification(req, new AccountCreateVerificationSecurity("sapiente", "quo") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDelete

Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteResponse;
import org.openapis.openapi.models.operations.AccountDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteResponse res = sdk.account.accountDelete(new AccountDeleteSecurity("odit", "at") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDeleteSession

Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteSessionRequest;
import org.openapis.openapi.models.operations.AccountDeleteSessionResponse;
import org.openapis.openapi.models.operations.AccountDeleteSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteSessionRequest req = new AccountDeleteSessionRequest("at");            

            AccountDeleteSessionResponse res = sdk.account.accountDeleteSession(req, new AccountDeleteSessionSecurity("maiores", "molestiae") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountDeleteSessions

Delete all sessions from the user account and remove any sessions cookies from the end client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountDeleteSessionsResponse;
import org.openapis.openapi.models.operations.AccountDeleteSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountDeleteSessionsResponse res = sdk.account.accountDeleteSessions(new AccountDeleteSessionsSecurity("quod", "quod") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGet

Get currently logged in user data as JSON object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetResponse;
import org.openapis.openapi.models.operations.AccountGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetResponse res = sdk.account.accountGet(new AccountGetSecurity("esse", "totam") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetLogs

Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetLogsResponse;
import org.openapis.openapi.models.operations.AccountGetLogsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetLogsResponse res = sdk.account.accountGetLogs(new AccountGetLogsSecurity("porro", "dolorum") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.logList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetPrefs

Get currently logged in user preferences as a key-value object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetPrefsResponse;
import org.openapis.openapi.models.operations.AccountGetPrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetPrefsResponse res = sdk.account.accountGetPrefs(new AccountGetPrefsSecurity("dicta", "nam") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.preferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetSession

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetSessionRequest;
import org.openapis.openapi.models.operations.AccountGetSessionResponse;
import org.openapis.openapi.models.operations.AccountGetSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetSessionRequest req = new AccountGetSessionRequest("officia");            

            AccountGetSessionResponse res = sdk.account.accountGetSession(req, new AccountGetSessionSecurity("occaecati", "fugit") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.session != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountGetSessions

Get currently logged in user list of active sessions across different devices.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountGetSessionsResponse;
import org.openapis.openapi.models.operations.AccountGetSessionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountGetSessionsResponse res = sdk.account.accountGetSessions(new AccountGetSessionsSecurity("deleniti", "hic") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.sessionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateEmail

Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateEmailRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateEmailResponse;
import org.openapis.openapi.models.operations.AccountUpdateEmailSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateEmailRequestBody req = new AccountUpdateEmailRequestBody("optio", "totam");            

            AccountUpdateEmailResponse res = sdk.account.accountUpdateEmail(req, new AccountUpdateEmailSecurity("beatae", "commodi") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateName

Update currently logged in user account name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateNameRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateNameResponse;
import org.openapis.openapi.models.operations.AccountUpdateNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateNameRequestBody req = new AccountUpdateNameRequestBody("molestiae");            

            AccountUpdateNameResponse res = sdk.account.accountUpdateName(req, new AccountUpdateNameSecurity("modi", "qui") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdatePassword

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdatePasswordRequestBody;
import org.openapis.openapi.models.operations.AccountUpdatePasswordResponse;
import org.openapis.openapi.models.operations.AccountUpdatePasswordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdatePasswordRequestBody req = new AccountUpdatePasswordRequestBody("impedit") {{
                oldPassword = "cum";
            }};            

            AccountUpdatePasswordResponse res = sdk.account.accountUpdatePassword(req, new AccountUpdatePasswordSecurity("esse", "ipsum") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdatePrefs

Update currently logged in user account preferences. You can pass only the specific settings you wish to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdatePrefsRequestBody;
import org.openapis.openapi.models.operations.AccountUpdatePrefsResponse;
import org.openapis.openapi.models.operations.AccountUpdatePrefsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdatePrefsRequestBody req = new AccountUpdatePrefsRequestBody(                new java.util.HashMap<String, Object>() {{
                                put("aspernatur", "perferendis");
                                put("ad", "natus");
                                put("sed", "iste");
                            }});            

            AccountUpdatePrefsResponse res = sdk.account.accountUpdatePrefs(req, new AccountUpdatePrefsSecurity("dolor", "natus") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateRecovery

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateRecoveryRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateRecoveryResponse;
import org.openapis.openapi.models.operations.AccountUpdateRecoverySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateRecoveryRequestBody req = new AccountUpdateRecoveryRequestBody("laboriosam", "hic", "saepe", "fuga");            

            AccountUpdateRecoveryResponse res = sdk.account.accountUpdateRecovery(req, new AccountUpdateRecoverySecurity("in", "corporis") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## accountUpdateVerification

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AccountUpdateVerificationRequestBody;
import org.openapis.openapi.models.operations.AccountUpdateVerificationResponse;
import org.openapis.openapi.models.operations.AccountUpdateVerificationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccountUpdateVerificationRequestBody req = new AccountUpdateVerificationRequestBody("iste", "iure");            

            AccountUpdateVerificationResponse res = sdk.account.accountUpdateVerification(req, new AccountUpdateVerificationSecurity("saepe", "quidem") {{
                jwt = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.token != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
