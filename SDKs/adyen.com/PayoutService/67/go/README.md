# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/PayoutService/67/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            RecurringExpiry: types.MustTimeFromString("2021-06-08T13:49:32.889Z"),
            RecurringFrequency: sdk.String("beatae"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        SelectedBrand: sdk.String("molestiae"),
        ShopperEmail: "modi",
        ShopperName: &shared.Name{
            FirstName: "Christy",
            LastName: "Ryan",
        },
        ShopperReference: "cum",
        SocialSecurityNumber: sdk.String("esse"),
        TelephoneNumber: sdk.String("ipsum"),
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Initialization](docs/initialization/README.md)

* [PostStoreDetail](docs/initialization/README.md#poststoredetail) - Store payout details
* [PostStoreDetailAndSubmitThirdParty](docs/initialization/README.md#poststoredetailandsubmitthirdparty) - Store details and submit a payout
* [PostSubmitThirdParty](docs/initialization/README.md#postsubmitthirdparty) - Submit a payout

### [InstantPayouts](docs/instantpayouts/README.md)

* [PostPayout](docs/instantpayouts/README.md#postpayout) - Make an instant card payout

### [Reviewing](docs/reviewing/README.md)

* [PostConfirmThirdParty](docs/reviewing/README.md#postconfirmthirdparty) - Confirm a payout
* [PostDeclineThirdParty](docs/reviewing/README.md#postdeclinethirdparty) - Cancel a payout
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
