<!-- Start SDK Example Usage -->
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
    res, err := s.Initialization.PostStoreDetail(ctx, shared.StoreDetailRequest{
        AdditionalData: map[string]string{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("illum"),
            BankCity: sdk.String("vel"),
            BankLocationID: sdk.String("error"),
            BankName: sdk.String("deserunt"),
            Bic: sdk.String("suscipit"),
            CountryCode: sdk.String("IS"),
            Iban: sdk.String("magnam"),
            OwnerName: sdk.String("debitis"),
            TaxID: sdk.String("ipsa"),
        },
        BillingAddress: &shared.Address{
            City: "Edinburg",
            Country: "Holy See (Vatican City State)",
            HouseNumberOrName: "molestiae",
            PostalCode: "85453-9803",
            StateOrProvince: sdk.String("veritatis"),
            Street: "0389 Connelly Trace",
        },
        Card: &shared.Card{
            Cvc: sdk.String("at"),
            ExpiryMonth: sdk.String("maiores"),
            ExpiryYear: sdk.String("molestiae"),
            HolderName: sdk.String("quod"),
            IssueNumber: sdk.String("quod"),
            Number: sdk.String("esse"),
            StartMonth: sdk.String("totam"),
            StartYear: sdk.String("porro"),
        },
        DateOfBirth: types.MustDateFromString("2022-10-06"),
        EntityType: shared.StoreDetailRequestEntityTypeEnumCompany,
        FraudOffset: sdk.Int(639921),
        MerchantAccount: "occaecati",
        Nationality: "fugit",
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumRecurring.ToPointer(),
            RecurringDetailName: sdk.String("hic"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        SelectedBrand: sdk.String("totam"),
        ShopperEmail: "beatae",
        ShopperName: &shared.Name{
            FirstName: "Haskell",
            LastName: "Krajcik",
        },
        ShopperReference: "modi",
        SocialSecurityNumber: sdk.String("qui"),
    }, operations.PostStoreDetailSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->