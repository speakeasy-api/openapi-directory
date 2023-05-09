# Initialization

### Available Operations

* [PostStoreDetail](#poststoredetail) - Store payout details
* [PostStoreDetailAndSubmitThirdParty](#poststoredetailandsubmitthirdparty) - Store details and submit a payout
* [PostSubmitThirdParty](#postsubmitthirdparty) - Submit a payout

## PostStoreDetail

Stores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.

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
    res, err := s.Initialization.PostStoreDetail(ctx, shared.StoreDetailRequest{
        AdditionalData: map[string]string{
            "aspernatur": "perferendis",
            "ad": "natus",
            "sed": "iste",
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("dolor"),
            BankCity: sdk.String("natus"),
            BankLocationID: sdk.String("laboriosam"),
            BankName: sdk.String("hic"),
            Bic: sdk.String("saepe"),
            CountryCode: sdk.String("NU"),
            Iban: sdk.String("in"),
            OwnerName: sdk.String("corporis"),
            TaxID: sdk.String("iste"),
        },
        BillingAddress: &shared.Address{
            City: "Sterlingcester",
            Country: "Bhutan",
            HouseNumberOrName: "ipsa",
            PostalCode: "66612-3173",
            StateOrProvince: sdk.String("omnis"),
            Street: "3504 Yundt Ville",
        },
        Card: &shared.Card{
            Cvc: sdk.String("architecto"),
            ExpiryMonth: sdk.String("mollitia"),
            ExpiryYear: sdk.String("dolorem"),
            HolderName: sdk.String("culpa"),
            IssueNumber: sdk.String("consequuntur"),
            Number: sdk.String("repellat"),
            StartMonth: sdk.String("mollitia"),
            StartYear: sdk.String("occaecati"),
        },
        DateOfBirth: types.MustDateFromString("2022-08-02"),
        EntityType: shared.StoreDetailRequestEntityTypeEnumNaturalPerson,
        FraudOffset: sdk.Int(474697),
        MerchantAccount: "velit",
        Nationality: "error",
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("quis"),
            RecurringExpiry: types.MustTimeFromString("2022-04-29T17:10:10.440Z"),
            RecurringFrequency: sdk.String("animi"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        SelectedBrand: sdk.String("odit"),
        ShopperEmail: "quo",
        ShopperName: &shared.Name{
            FirstName: "Cleveland",
            LastName: "Wiegand",
        },
        ShopperReference: "ipsam",
        SocialSecurityNumber: sdk.String("id"),
        TelephoneNumber: sdk.String("possimus"),
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

## PostStoreDetailAndSubmitThirdParty

Submits a payout and stores its details for subsequent payouts.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

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
    res, err := s.Initialization.PostStoreDetailAndSubmitThirdParty(ctx, shared.StoreDetailAndSubmitRequest{
        AdditionalData: map[string]string{
            "quasi": "error",
        },
        Amount: shared.Amount{
            Currency: "temporibus",
            Value: 673660,
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("quasi"),
            BankCity: sdk.String("reiciendis"),
            BankLocationID: sdk.String("voluptatibus"),
            BankName: sdk.String("vero"),
            Bic: sdk.String("nihil"),
            CountryCode: sdk.String("LB"),
            Iban: sdk.String("voluptatibus"),
            OwnerName: sdk.String("ipsa"),
            TaxID: sdk.String("omnis"),
        },
        BillingAddress: &shared.Address{
            City: "Myrtistown",
            Country: "Argentina",
            HouseNumberOrName: "reprehenderit",
            PostalCode: "91324",
            StateOrProvince: sdk.String("dicta"),
            Street: "384 Bergnaum Extension",
        },
        Card: &shared.Card{
            Cvc: sdk.String("quidem"),
            ExpiryMonth: sdk.String("molestias"),
            ExpiryYear: sdk.String("excepturi"),
            HolderName: sdk.String("pariatur"),
            IssueNumber: sdk.String("modi"),
            Number: sdk.String("praesentium"),
            StartMonth: sdk.String("rem"),
            StartYear: sdk.String("voluptates"),
        },
        DateOfBirth: types.MustDateFromString("2022-01-29"),
        EntityType: shared.StoreDetailAndSubmitRequestEntityTypeEnumCompany,
        FraudOffset: sdk.Int(83112),
        MerchantAccount: "itaque",
        Nationality: "incidunt",
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("consequatur"),
            RecurringExpiry: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
            RecurringFrequency: sdk.String("explicabo"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        Reference: "distinctio",
        SelectedBrand: sdk.String("quibusdam"),
        ShopperEmail: "labore",
        ShopperName: &shared.Name{
            FirstName: "Dillan",
            LastName: "Deckow",
        },
        ShopperReference: "aliquid",
        ShopperStatement: sdk.String("cupiditate"),
        SocialSecurityNumber: sdk.String("quos"),
        TelephoneNumber: sdk.String("perferendis"),
    }, operations.PostStoreDetailAndSubmitThirdPartySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreDetailAndSubmitResponse != nil {
        // handle response
    }
}
```

## PostSubmitThirdParty

Submits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.

The submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.

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
    res, err := s.Initialization.PostSubmitThirdParty(ctx, shared.SubmitRequest{
        AdditionalData: map[string]string{
            "assumenda": "ipsam",
        },
        Amount: shared.Amount{
            Currency: "alias",
            Value: 146441,
        },
        DateOfBirth: types.MustDateFromString("2021-11-11"),
        EntityType: shared.SubmitRequestEntityTypeEnumNaturalPerson.ToPointer(),
        FraudOffset: sdk.Int(703737),
        MerchantAccount: "tempore",
        Nationality: sdk.String("labore"),
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumPayout.ToPointer(),
            RecurringDetailName: sdk.String("eum"),
            RecurringExpiry: types.MustTimeFromString("2022-03-31T00:30:19.135Z"),
            RecurringFrequency: sdk.String("sint"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        Reference: "provident",
        SelectedRecurringDetailReference: "necessitatibus",
        ShopperEmail: "sint",
        ShopperName: &shared.Name{
            FirstName: "Loyce",
            LastName: "Fadel",
        },
        ShopperReference: "debitis",
        ShopperStatement: sdk.String("a"),
        SocialSecurityNumber: sdk.String("dolorum"),
    }, operations.PostSubmitThirdPartySecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitResponse != nil {
        // handle response
    }
}
```
