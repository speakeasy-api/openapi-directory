# Registration

### Available Operations

* [Register](#register) - Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


## Register

Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.


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
    res, err := s.Registration.Register(ctx, operations.RegisterRequest{
        RegistrationRequest: shared.RegistrationRequest{
            Email: "Guiseppe_Hodkiewicz6@hotmail.com",
            FirstName: sdk.String("Paxton"),
            LanguageCode: sdk.String("fuga"),
            LastName: sdk.String("Padberg"),
            Marketing: sdk.Bool(false),
            Password: "consectetur",
            Pin: sdk.String("velit"),
            Segments: []string{
                "ipsum",
                "impedit",
                "magni",
            },
        },
        Ff: []shared.FeatureFlagsEnum{
            shared.FeatureFlagsEnumCd,
            shared.FeatureFlagsEnumCas,
            shared.FeatureFlagsEnumLdp,
        },
        Lang: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccessTokens != nil {
        // handle response
    }
}
```
