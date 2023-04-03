<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := shared.StoreDetailRequest{
        AdditionalData: map[string]string{
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: "illum",
            BankCity: "vel",
            BankLocationID: "error",
            BankName: "deserunt",
            Bic: "suscipit",
            CountryCode: "iure",
            Iban: "magnam",
            OwnerName: "debitis",
            TaxID: "ipsa",
        },
        BillingAddress: &shared.Address{
            City: "Edinburg",
            Country: "Holy See (Vatican City State)",
            HouseNumberOrName: "molestiae",
            PostalCode: "85453-9803",
            StateOrProvince: "veritatis",
            Street: "0389 Connelly Trace",
        },
        Card: &shared.Card{
            Cvc: "at",
            ExpiryMonth: "maiores",
            ExpiryYear: "molestiae",
            HolderName: "quod",
            IssueNumber: "quod",
            Number: "esse",
            StartMonth: "totam",
            StartYear: "porro",
        },
        DateOfBirth: "2022-10-06T15:49:54.663Z",
        EntityType: "Company",
        FraudOffset: 639921,
        MerchantAccount: "occaecati",
        Nationality: "fugit",
        Recurring: shared.Recurring{
            Contract: "RECURRING",
            RecurringDetailName: "hic",
            TokenService: "MCTOKENSERVICE",
        },
        SelectedBrand: "totam",
        ShopperEmail: "beatae",
        ShopperName: &shared.Name{
            FirstName: "Haskell",
            LastName: "Krajcik",
        },
        ShopperReference: "modi",
        SocialSecurityNumber: "qui",
    }

    ctx := context.Background()
    res, err := s.Initialization.PostStoreDetail(ctx, req, operations.PostStoreDetailSecurity{
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