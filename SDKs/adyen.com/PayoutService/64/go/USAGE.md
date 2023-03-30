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

    req := operations.PostStoreDetailRequest{
        Security: operations.PostStoreDetailSecurity{
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &shared.StoreDetailRequest{
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
            DateOfBirth: "2022-07-25T07:22:02.804Z",
            EntityType: "NaturalPerson",
            FraudOffset: 720633,
            MerchantAccount: "officia",
            Nationality: "occaecati",
            Recurring: shared.Recurring{
                Contract: "ONECLICK",
                RecurringDetailName: "deleniti",
                RecurringExpiry: "2022-04-19T07:03:09.029Z",
                RecurringFrequency: "optio",
                TokenService: "MCTOKENSERVICE",
            },
            SelectedBrand: "beatae",
            ShopperEmail: "commodi",
            ShopperName: &shared.Name{
                FirstName: "Jaren",
                LastName: "Gleason",
            },
            ShopperReference: "qui",
            SocialSecurityNumber: "impedit",
            TelephoneNumber: "cum",
        },
    }

    ctx := context.Background()
    res, err := s.Initialization.PostStoreDetail(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreDetailResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->