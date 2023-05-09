# Auth

## Overview

Authentication

### Available Operations

* [~~CompleteOpenIDLogin~~](#completeopenidlogin) - Complete OpenID Connect authentication :warning: **Deprecated**
* [~~InitiateOpenIDLogin~~](#initiateopenidlogin) - Initiate OpenID Connect authentication :warning: **Deprecated**
* [~~Login~~](#login) - Authenticate user (Login) :warning: **Deprecated**
* [Ping](#ping) - Ping
* [RecoverUserName](#recoverusername) - Recover username
* [RequestPasswordReset](#requestpasswordreset) - Request password reset
* [ResetPassword](#resetpassword) - Reset password
* [ValidateResetPasswordToken](#validateresetpasswordtoken) - Validate information for password reset

## ~~CompleteOpenIDLogin~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>

### Description:  
This is the second step of the OpenID Connect authentication.  
The user hands over the authorization code and is logged in.

### Precondition:
Existing user with activated OpenID Connect authentication that is **NOT** locked.

### Postcondition:
User is logged in.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.CompleteOpenIDLogin(ctx, operations.CompleteOpenIDLoginRequest{
        Code: "quibusdam",
        IDToken: sdk.String("unde"),
        State: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```

## ~~InitiateOpenIDLogin~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.14.0</h3>

### Description:
This is the first step of the OpenID Connect authentication.  
The user is send to the OpenID Connect identity provider to authenticate himself and retrieve an authorization code.

### Precondition:
None.

### Postcondition:
User is redirected to OpenID Connect identity provider to authenticate himself.

### Further Information:
None.

OpenID Specifications
<http://openid.net/developers/specs>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.InitiateOpenIDLogin(ctx, operations.InitiateOpenIDLoginRequest{
        Issuer: "corrupti",
        Language: "illum",
        RedirectURI: "vel",
        Test: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~Login~~

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.13.0</h3>

### Description:
Authenticates user and provides an authentication token (`X-Sds-Auth-Token`) that is required for the most operations.

### Precondition:
Existing user that is **NOT** locked.

### Postcondition:
User is logged in.

### Further Information:
The provided token is valid for **two hours**, every usage resets this period to two full hours again.  
Logging off invalidates the token.  

### Available authentication methods:
<details open style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method (`authType`) | Description |
| :--- | :--- |
| `basic` | Log in with credentials stored in the database <br>Formerly known as `sql`.|
| `active_directory` | Log in with Active Directory credentials |
| `radius` | Log in with RADIUS username, PIN and token password.<br>Token (request parameter) may be set, otherwise this parameter is ignored. If token is set, password is optional. |
| `openid` | Please use `POST /auth/openid/login` API to login with OpenID Connect identity |

</details>

Remote Authentication Dial In User Service (RADIUS)
<https://tools.ietf.org/html/rfc2865>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.Login(ctx, shared.LoginRequest{
        AuthType: shared.LoginRequestAuthTypeEnumActiveDirectory.ToPointer(),
        Language: sdk.String("deserunt"),
        Login: sdk.String("suscipit"),
        Password: "iure",
        State: sdk.String("magnam"),
        Token: sdk.String("debitis"),
        UserName: sdk.String("Anahi38"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LoginResponse != nil {
        // handle response
    }
}
```

## Ping

### Description:
Test connection to DRACOON Core Service.

### Precondition:
None.

### Postcondition:
`200 OK` with current date string is returned if successful.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.Ping(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ping200TextPlainString != nil {
        // handle response
    }
}
```

## RecoverUserName

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.13.0</h3>

### Description:  
Request an email with the user names of all accounts connected to the email.

### Precondition:
Valid email address.

### Postcondition:
An email is sent to the provided address, with a list of account user names connected to it.

### Further Information:
None.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.RecoverUserName(ctx, shared.RecoverUserNameRequest{
        CreatorLanguage: sdk.String("molestiae"),
        Email: "Randy_Lehner@hotmail.com",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RequestPasswordReset

### Description:  
Request an email with a password reset token for a certain user to reset password.

### Precondition:
Registered user account.

### Postcondition:
Provided user receives email with password reset token.

### Further Information:
None.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.RequestPasswordReset(ctx, shared.ResetPasswordRequest{
        CreatorLanguage: sdk.String("nisi"),
        Language: sdk.String("recusandae"),
        Login: sdk.String("temporibus"),
        UserName: sdk.String("Antonetta64"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ResetPassword

### Description:  
Resets user's password.

### Precondition:
User received a password reset token.

### Postcondition:
User's password is reset to the provided password.

### Further Information:
Forbidden characters in passwords: [`&`, `'`, `<`, `>`]

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.ResetPassword(ctx, operations.ResetPasswordRequest{
        ResetPasswordWithTokenRequest: shared.ResetPasswordWithTokenRequest{
            Password: "perferendis",
        },
        Token: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ValidateResetPasswordToken

### Description:  
Request all information for a password change dialogue e.g. real name of user.

### Precondition:
User received a password reset token.

### Postcondition:
Context information is returned.

### Further Information:
None.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Auth.ValidateResetPasswordToken(ctx, operations.ValidateResetPasswordTokenRequest{
        Token: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResetPasswordTokenValidateResponse != nil {
        // handle response
    }
}
```
