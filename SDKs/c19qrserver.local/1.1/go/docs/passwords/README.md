# Passwords

## Overview

Endpoints related to changing and resetting passwords

### Available Operations

* [PostChangePassword](#postchangepassword) - Used for changing your password
* [PostRequestPasswordReset](#postrequestpasswordreset) - Used for requesting a password reset code
* [PostVerifyPasswordChange](#postverifypasswordchange) - Used for resetting your password when you forgot it

## PostChangePassword

Pass in your old password and your new password

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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Passwords.PostChangePassword(ctx, operations.PostChangePasswordSample{
        OldPassword: sdk.String("hunter3"),
        Password: sdk.String("hunter4"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRequestPasswordReset

The admin should run this on behalf of a user who forgot their password.  The API will generate a password reset code which the admin should then provide to the user. The user can use their client to reset their password. Normally the password reset code is mailed to the user, but I didn't want to do this in this case because I didn't want to  introduce the complicated dependency of having an SMTP server just for this purpose. Doing it this way makes it easy for people to adopt this  API.


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Passwords.PostRequestPasswordReset(ctx, operations.PostRequestPasswordResetSample{
        Email: sdk.String("user@example.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RequestPasswordResetResponse != nil {
        // handle response
    }
}
```

## PostVerifyPasswordChange

Another endpoint will generate a password reset code for you. You should  use the client app to submit the reset code along with the new password to change your password.


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
            TokenHeader: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Passwords.PostVerifyPasswordChange(ctx, operations.PostVerifyPasswordChangeSample{
        GUID: sdk.String("d5e53b3a-ffc1-4436-b085-04aaed5ec861"),
        Password: sdk.String("hunter3"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
