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
                "deserunt": "porro",
                "nulla": "id",
                "vero": "perspiciatis",
            },
            Bank: &shared.BankAccount{
                BankAccountNumber: "nulla",
                BankCity: "nihil",
                BankLocationID: "fuga",
                BankName: "facilis",
                Bic: "eum",
                CountryCode: "iusto",
                Iban: "ullam",
                OwnerName: "saepe",
                TaxID: "inventore",
            },
            BillingAddress: &shared.Address{
                City: "East Orange",
                Country: "Holy See (Vatican City State)",
                HouseNumberOrName: "voluptatum",
                PostalCode: "85453-9803",
                StateOrProvince: "dicta",
                Street: "0389 Strosin Spur",
            },
            Card: &shared.Card{
                Cvc: "accusamus",
                ExpiryMonth: "reiciendis",
                ExpiryYear: "rem",
                HolderName: "quibusdam",
                IssueNumber: "et",
                Number: "praesentium",
                StartMonth: "occaecati",
                StartYear: "dolor",
            },
            DateOfBirth: "2022-07-25T04:50:36.392Z",
            EntityType: "NaturalPerson",
            FraudOffset: 720633,
            MerchantAccount: "rerum",
            Nationality: "culpa",
            Recurring: shared.Recurring{
                Contract: "ONECLICK",
                RecurringDetailName: "sed",
                RecurringExpiry: "2022-04-19T04:31:42.614Z",
                RecurringFrequency: "possimus",
                TokenService: "MCTOKENSERVICE",
            },
            SelectedBrand: "odit",
            ShopperEmail: "esse",
            ShopperName: &shared.Name{
                FirstName: "Jared",
                LastName: "Gleason",
            },
            ShopperReference: "amet",
            SocialSecurityNumber: "est",
            TelephoneNumber: "id",
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