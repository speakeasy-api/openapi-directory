# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/PayoutService/51/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Initialization

* `PostStoreDetail` - Store payout details
* `PostStoreDetailAndSubmitThirdParty` - Store details and submit a payout
* `PostSubmitThirdParty` - Submit a payout

### InstantPayouts

* `PostPayout` - Make an instant card payout

### Reviewing

* `PostConfirmThirdParty` - Confirm a payout
* `PostDeclineThirdParty` - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
