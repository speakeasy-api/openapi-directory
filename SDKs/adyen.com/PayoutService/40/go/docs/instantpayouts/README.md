# InstantPayouts

### Available Operations

* [PostPayout](#postpayout) - Make an instant card payout

## PostPayout

With this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InstantPayouts.PostPayout(ctx, shared.PayoutRequest{
        Amount: shared.Amount{
            Currency: "dolorum",
            Value: 447125,
        },
        BillingAddress: &shared.Address{
            City: "Roseworth",
            Country: "Peru",
            HouseNumberOrName: "dicta",
            PostalCode: "78436",
            StateOrProvince: sdk.String("accusamus"),
            Street: "53896 Reinger Plains",
        },
        Card: &shared.Card{
            Cvc: sdk.String("blanditiis"),
            ExpiryMonth: sdk.String("deleniti"),
            ExpiryYear: sdk.String("sapiente"),
            HolderName: sdk.String("amet"),
            IssueNumber: sdk.String("deserunt"),
            Number: sdk.String("nisi"),
            StartMonth: sdk.String("vel"),
            StartYear: sdk.String("natus"),
        },
        FraudOffset: sdk.Int(606393),
        FundSource: &shared.FundSource{
            AdditionalData: map[string]string{
                "perferendis": "nihil",
                "magnam": "distinctio",
            },
            BillingAddress: &shared.Address{
                City: "Greenboro",
                Country: "Holy See (Vatican City State)",
                HouseNumberOrName: "natus",
                PostalCode: "48112-0535",
                StateOrProvince: sdk.String("quos"),
                Street: "0696 Holden Extensions",
            },
            Card: &shared.Card{
                Cvc: sdk.String("necessitatibus"),
                ExpiryMonth: sdk.String("odit"),
                ExpiryYear: sdk.String("nemo"),
                HolderName: sdk.String("quasi"),
                IssueNumber: sdk.String("iure"),
                Number: sdk.String("doloribus"),
                StartMonth: sdk.String("debitis"),
                StartYear: sdk.String("eius"),
            },
            ShopperEmail: sdk.String("maxime"),
            ShopperName: &shared.Name{
                FirstName: "Kaitlyn",
                LastName: "Prosacco",
            },
            TelephoneNumber: sdk.String("in"),
        },
        MerchantAccount: "architecto",
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("repudiandae"),
            RecurringExpiry: types.MustTimeFromString("2022-04-15T07:14:46.128Z"),
            RecurringFrequency: sdk.String("nihil"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        Reference: "quibusdam",
        SelectedRecurringDetailReference: sdk.String("sed"),
        ShopperEmail: sdk.String("saepe"),
        ShopperInteraction: shared.PayoutRequestShopperInteractionEnumPos.ToPointer(),
        ShopperName: &shared.Name{
            FirstName: "Alia",
            LastName: "Crooks",
        },
        ShopperReference: sdk.String("praesentium"),
        TelephoneNumber: sdk.String("natus"),
    }, operations.PostPayoutSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayoutResponse != nil {
        // handle response
    }
}
```
