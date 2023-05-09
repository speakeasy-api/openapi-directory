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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.InstantPayouts.PostPayout(ctx, shared.PayoutRequest{
        Amount: shared.Amount{
            Currency: "provident",
            Value: 896039,
        },
        BillingAddress: &shared.Address{
            City: "Loyceburgh",
            Country: "Togo",
            HouseNumberOrName: "a",
            PostalCode: "44896-1278",
            StateOrProvince: sdk.String("ea"),
            Street: "6825 Shannon Walk",
        },
        Card: &shared.Card{
            Cvc: sdk.String("quidem"),
            ExpiryMonth: sdk.String("provident"),
            ExpiryYear: sdk.String("nam"),
            HolderName: sdk.String("id"),
            IssueNumber: sdk.String("blanditiis"),
            Number: sdk.String("deleniti"),
            StartMonth: sdk.String("sapiente"),
            StartYear: sdk.String("amet"),
        },
        FraudOffset: sdk.Int(643990),
        FundSource: &shared.FundSource{
            AdditionalData: map[string]string{
                "vel": "natus",
                "omnis": "molestiae",
            },
            BillingAddress: &shared.Address{
                City: "South Elishacester",
                Country: "Northern Mariana Islands",
                HouseNumberOrName: "labore",
                PostalCode: "36748",
                StateOrProvince: sdk.String("aspernatur"),
                Street: "20535 Marvin Burg",
            },
            Card: &shared.Card{
                Cvc: sdk.String("mollitia"),
                ExpiryMonth: sdk.String("reiciendis"),
                ExpiryYear: sdk.String("mollitia"),
                HolderName: sdk.String("ad"),
                IssueNumber: sdk.String("eum"),
                Number: sdk.String("dolor"),
                StartMonth: sdk.String("necessitatibus"),
                StartYear: sdk.String("odit"),
            },
            ShopperEmail: sdk.String("nemo"),
            ShopperName: &shared.Name{
                FirstName: "Avis",
                LastName: "Kertzmann",
            },
            TelephoneNumber: sdk.String("doloribus"),
        },
        MerchantAccount: "debitis",
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("maxime"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        Reference: "facilis",
        SelectedRecurringDetailReference: sdk.String("in"),
        ShopperEmail: sdk.String("architecto"),
        ShopperInteraction: shared.PayoutRequestShopperInteractionEnumEcommerce.ToPointer(),
        ShopperName: &shared.Name{
            FirstName: "Tevin",
            LastName: "Herman",
        },
        ShopperReference: sdk.String("expedita"),
        TelephoneNumber: sdk.String("nihil"),
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
