# Support

### Available Operations

* [ForgotPassword](#forgotpassword) - Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.

* [GetSubscriptionData](#getsubscriptiondata) - Returns the details of subscription data for a user with specified id.
* [ResetPassword](#resetpassword) - When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.

* [VerifyEmail](#verifyemail) - When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


## ForgotPassword

Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Support.ForgotPassword(ctx, operations.ForgotPasswordRequest{
        PasswordResetEmailRequest: shared.PasswordResetEmailRequest{
            Email: "Clementine77@yahoo.com",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLrl,
            shared.FeatureFlagsEnumHb,
            shared.FeatureFlagsEnumIdp,
        },
        Lang: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubscriptionData

Returns the details of subscription data for a user with specified id.

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
    res, err := s.Support.GetSubscriptionData(ctx, operations.GetSubscriptionDataRequest{
        ID: "64d1db1f-2c43-4106-a1e9-6349e1cf9e06",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionDetails != nil {
        // handle response
    }
}
```

## ResetPassword

When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use. 
It should then be submitted to this endpoint,
along with the reset token from the email link. 
The token should be provided in the body as resetToken property.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Support.ResetPassword(ctx, operations.ResetPasswordRequest{
        PasswordResetRequest: shared.PasswordResetRequest{
            Password: "itaque",
            ResetToken: "velit",
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumLdp,
            shared.FeatureFlagsEnumIdp,
            shared.FeatureFlagsEnumHb,
        },
        Lang: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## VerifyEmail

When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Support.VerifyEmail(ctx, operations.VerifyEmailRequest{
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumAll,
        },
        Lang: sdk.String("officia"),
    }, operations.VerifyEmailSecurity{
        VerifyEmailAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
