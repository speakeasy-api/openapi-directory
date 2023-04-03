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
            RecurringExpiry: "2021-06-08T13:49:32.889Z",
            RecurringFrequency: "beatae",
            TokenService: "VISATOKENSERVICE",
        },
        SelectedBrand: "molestiae",
        ShopperEmail: "modi",
        ShopperName: &shared.Name{
            FirstName: "Christy",
            LastName: "Ryan",
        },
        ShopperReference: "cum",
        SocialSecurityNumber: "esse",
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