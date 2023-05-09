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
            "cum": "esse",
            "ipsum": "excepturi",
            "aspernatur": "perferendis",
            "ad": "natus",
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("sed"),
            BankCity: sdk.String("iste"),
            BankLocationID: sdk.String("dolor"),
            BankName: sdk.String("natus"),
            Bic: sdk.String("laboriosam"),
            CountryCode: sdk.String("UZ"),
            Iban: sdk.String("saepe"),
            OwnerName: sdk.String("fuga"),
            TaxID: sdk.String("in"),
        },
        BillingAddress: &shared.Address{
            City: "New Humberto",
            Country: "Trinidad and Tobago",
            HouseNumberOrName: "quidem",
            PostalCode: "09666",
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
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        SelectedBrand: sdk.String("velit"),
        ShopperEmail: "error",
        ShopperName: &shared.Name{
            FirstName: "Carmelo",
            LastName: "Hauck",
        },
        ShopperReference: "vitae",
        SocialSecurityNumber: sdk.String("laborum"),
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
            "enim": "odit",
            "quo": "sequi",
            "tenetur": "ipsam",
        },
        Amount: shared.Amount{
            Currency: "id",
            Value: 820994,
        },
        Bank: &shared.BankAccount{
            BankAccountNumber: sdk.String("aut"),
            BankCity: sdk.String("quasi"),
            BankLocationID: sdk.String("error"),
            BankName: sdk.String("temporibus"),
            Bic: sdk.String("laborum"),
            CountryCode: sdk.String("BI"),
            Iban: sdk.String("reiciendis"),
            OwnerName: sdk.String("voluptatibus"),
            TaxID: sdk.String("vero"),
        },
        BillingAddress: &shared.Address{
            City: "Johnworth",
            Country: "Austria",
            HouseNumberOrName: "omnis",
            PostalCode: "70042",
            StateOrProvince: sdk.String("maiores"),
            Street: "32416 Shania Isle",
        },
        Card: &shared.Card{
            Cvc: sdk.String("repudiandae"),
            ExpiryMonth: sdk.String("quae"),
            ExpiryYear: sdk.String("ipsum"),
            HolderName: sdk.String("quidem"),
            IssueNumber: sdk.String("molestias"),
            Number: sdk.String("excepturi"),
            StartMonth: sdk.String("pariatur"),
            StartYear: sdk.String("modi"),
        },
        DateOfBirth: types.MustDateFromString("2021-12-15"),
        EntityType: shared.StoreDetailAndSubmitRequestEntityTypeEnumCompany,
        FraudOffset: sdk.Int(93940),
        MerchantAccount: "repudiandae",
        Nationality: "sint",
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumOneclick.ToPointer(),
            RecurringDetailName: sdk.String("itaque"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        Reference: "enim",
        SelectedBrand: sdk.String("consequatur"),
        ShopperEmail: "est",
        ShopperName: &shared.Name{
            FirstName: "Roosevelt",
            LastName: "Cole",
        },
        ShopperReference: "deserunt",
        ShopperStatement: sdk.String("distinctio"),
        SocialSecurityNumber: sdk.String("quibusdam"),
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
            "modi": "qui",
            "aliquid": "cupiditate",
        },
        Amount: shared.Amount{
            Currency: "quos",
            Value: 20107,
        },
        DateOfBirth: types.MustDateFromString("2022-03-04"),
        EntityType: shared.SubmitRequestEntityTypeEnumNaturalPerson.ToPointer(),
        FraudOffset: sdk.Int(4695),
        MerchantAccount: "fugit",
        Nationality: sdk.String("dolorum"),
        Recurring: shared.Recurring{
            Contract: shared.RecurringContractEnumRecurring.ToPointer(),
            RecurringDetailName: sdk.String("tempora"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        Reference: "tempore",
        SelectedRecurringDetailReference: "labore",
        ShopperEmail: "delectus",
        ShopperName: &shared.Name{
            FirstName: "Horacio",
            LastName: "Franey",
        },
        ShopperReference: "eligendi",
        ShopperStatement: sdk.String("sint"),
        SocialSecurityNumber: sdk.String("aliquid"),
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
