# Email

## Overview

The emails APIs allow you to generate welcome emails for account users and referral emails.

### Available Operations

* [SendReferralEmail](#sendreferralemail) - Send referral email to a given address
* [SendWelcomeEmail](#sendwelcomeemail) - Resend welcome email to specific user

## SendReferralEmail

Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. 

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
    res, err := s.Email.SendReferralEmail(ctx, operations.SendReferralEmailRequest{
        RequestBody: &operations.SendReferralEmailSendReferralEmailRequestBody{
            Emails: []string{
                "Haskell18@gmail.com",
                "Myra56@hotmail.com",
                "Aiden.Hane@gmail.com",
            },
            Message: "I use ExaVault for secure file sending, and so should you. Follow my link to sign up for a trial.",
        },
        EvAccessToken: "iste",
        EvAPIKey: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## SendWelcomeEmail

Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).

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
    res, err := s.Email.SendWelcomeEmail(ctx, operations.SendWelcomeEmailRequest{
        EvAccessToken: "natus",
        EvAPIKey: "laboriosam",
        Username: "Tyra.Turcotte35",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```
