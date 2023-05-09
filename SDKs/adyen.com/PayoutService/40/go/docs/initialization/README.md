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
            "excepturi": "aspernatur",
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("perferendis"),
            BankCity: sdk.String("ad"),
            BankLocationID: sdk.String("natus"),
            BankName: sdk.String("sed"),
            Bic: sdk.String("iste"),
            CountryCode: sdk.String("CZ"),
            Iban: sdk.String("natus"),
            OwnerName: sdk.String("laboriosam"),
            TaxID: sdk.String("hic"),
        },
        BillingAddress: &shared.Address{
            City: "Petaluma",
            Country: "Jordan",
            HouseNumberOrName: "corporis",
            PostalCode: "49600-9666",
            StateOrProvince: sdk.String("dolores"),
            Street: "31736 Era Mountains",
        },
        Card: &shared.Card{
            Cvc: sdk.String("accusantium"),
            ExpiryMonth: sdk.String("iure"),
            ExpiryYear: sdk.String("culpa"),
            HolderName: sdk.String("doloribus"),
            IssueNumber: sdk.String("sapiente"),
            Number: sdk.String("architecto"),
            StartMonth: sdk.String("mollitia"),
            StartYear: sdk.String("dolorem"),
        },
        DateOfBirth: types.MustDateFromString("2022-09-05"),
        EntityType: shared.StoreDetailRequestEntityTypeEnumCompany,
        FraudOffset: sdk.Int(653108),
        MerchantAccount: "occaecati",
        Nationality: "numquam",
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumRecurring.ToPointer(),
            RecurringDetailName: sdk.String("quam"),
            RecurringExpiry: types.MustTimeFromString("2022-10-03T18:49:53.900Z"),
            RecurringFrequency: sdk.String("error"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        SelectedBrand: sdk.String("quis"),
        ShopperEmail: "vitae",
        ShopperName: &shared.Name{
            FirstName: "Marguerite",
            LastName: "O'Kon",
        },
        ShopperReference: "enim",
        SocialSecurityNumber: sdk.String("odit"),
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
            "sequi": "tenetur",
            "ipsam": "id",
            "possimus": "aut",
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
            "magni": "assumenda",
        },
        Amount: shared.Amount{
            Currency: "ipsam",
            Value: 4695,
        },
        DateOfBirth: types.MustDateFromString("2022-04-28"),
        EntityType: shared.SubmitRequestEntityTypeEnumCompany.ToPointer(),
        FraudOffset: sdk.Int(270008),
        MerchantAccount: "facilis",
        Nationality: sdk.String("tempore"),
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("delectus"),
            RecurringExpiry: types.MustTimeFromString("2022-10-02T04:55:20.234Z"),
            RecurringFrequency: sdk.String("eligendi"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        Reference: "aliquid",
        SelectedRecurringDetailReference: "provident",
        ShopperEmail: "necessitatibus",
        ShopperName: &shared.Name{
            FirstName: "Kianna",
            LastName: "Nikolaus",
        },
        ShopperReference: "dolor",
        ShopperStatement: sdk.String("debitis"),
        SocialSecurityNumber: sdk.String("a"),
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
