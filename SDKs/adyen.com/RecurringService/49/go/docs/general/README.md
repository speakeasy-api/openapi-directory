# General

### Available Operations

* [PostCreatePermit](#postcreatepermit) - Create new permits linked to a recurring contract.
* [PostDisable](#postdisable) - Disable stored payment details
* [PostListRecurringDetails](#postlistrecurringdetails) - Get stored payment details
* [PostNotifyShopper](#postnotifyshopper) - Ask issuer to notify the shopper
* [PostScheduleAccountUpdater](#postscheduleaccountupdater) - Schedule running the Account Updater

## PostCreatePermit

Create permits for a recurring contract, including support for defining restrictions.

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
    res, err := s.General.PostCreatePermit(ctx, shared.CreatePermitRequest{
        MerchantAccount: "deserunt",
        Permits: []shared.Permit{
            shared.Permit{
                PartnerID: sdk.String("ipsam"),
                ProfileReference: sdk.String("repellendus"),
                Restriction: &shared.PermitRestriction{
                    MaxAmount: &shared.Amount{
                        Currency: "sapiente",
                        Value: 778157,
                    },
                    SingleTransactionLimit: &shared.Amount{
                        Currency: "odit",
                        Value: 870013,
                    },
                    SingleUse: sdk.Bool(false),
                },
                ResultKey: sdk.String("at"),
                ValidTillDate: types.MustTimeFromString("2021-07-31T09:34:50.024Z"),
            },
        },
        RecurringDetailReference: "quod",
        ShopperReference: "quod",
    }, operations.PostCreatePermitSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePermitResult != nil {
        // handle response
    }
}
```

## PostDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/classic-integration/recurring-payments/disable-stored-details/).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostDisable(ctx, shared.DisableRequest{
        Contract: sdk.String("esse"),
        MerchantAccount: "totam",
        RecurringDetailReference: sdk.String("porro"),
        ShopperReference: "dolorum",
    }, operations.PostDisableSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableResult != nil {
        // handle response
    }
}
```

## PostListRecurringDetails

Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.

For more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).

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
    res, err := s.General.PostListRecurringDetails(ctx, shared.RecurringDetailsRequest{
        MerchantAccount: "dicta",
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumPayout.ToPointer(),
            RecurringDetailName: sdk.String("officia"),
            RecurringExpiry: types.MustTimeFromString("2022-09-18T08:27:00.721Z"),
            RecurringFrequency: sdk.String("deleniti"),
            TokenService: shared.RecurringTokenServiceEnumMctokenservice.ToPointer(),
        },
        ShopperReference: "optio",
    }, operations.PostListRecurringDetailsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecurringDetailsResult != nil {
        // handle response
    }
}
```

## PostNotifyShopper

Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostNotifyShopper(ctx, shared.NotifyShopperRequest{
        Amount: shared.Amount{
            Currency: "totam",
            Value: 105907,
        },
        BillingDate: sdk.String("commodi"),
        BillingSequenceNumber: sdk.String("molestiae"),
        DisplayedReference: sdk.String("modi"),
        MerchantAccount: "qui",
        RecurringDetailReference: sdk.String("impedit"),
        Reference: "cum",
        ShopperReference: "esse",
        StoredPaymentMethodID: sdk.String("ipsum"),
    }, operations.PostNotifyShopperSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyShopperResult != nil {
        // handle response
    }
}
```

## PostScheduleAccountUpdater

When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:
* If the card information is provided, all the sub-fields for `card` are mandatory.
* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostScheduleAccountUpdater(ctx, shared.ScheduleAccountUpdaterRequest{
        AdditionalData: map[string]string{
            "aspernatur": "perferendis",
            "ad": "natus",
            "sed": "iste",
        },
        Card: &shared.Card{
            Cvc: sdk.String("dolor"),
            ExpiryMonth: sdk.String("natus"),
            ExpiryYear: sdk.String("laboriosam"),
            HolderName: sdk.String("hic"),
            IssueNumber: sdk.String("saepe"),
            Number: sdk.String("fuga"),
            StartMonth: sdk.String("in"),
            StartYear: sdk.String("corporis"),
        },
        MerchantAccount: "iste",
        Reference: "iure",
        SelectedRecurringDetailReference: sdk.String("saepe"),
        ShopperReference: sdk.String("quidem"),
    }, operations.PostScheduleAccountUpdaterSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleAccountUpdaterResult != nil {
        // handle response
    }
}
```
