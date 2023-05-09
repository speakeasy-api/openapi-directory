# General

### Available Operations

* [PostDisable](#postdisable) - Disable stored payment details
* [PostListRecurringDetails](#postlistrecurringdetails) - Get stored payment details
* [PostNotifyShopper](#postnotifyshopper) - Ask issuer to notify the shopper
* [PostScheduleAccountUpdater](#postscheduleaccountupdater) - Schedule running the Account Updater

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
        Contract: sdk.String("unde"),
        MerchantAccount: "nulla",
        RecurringDetailReference: sdk.String("corrupti"),
        ShopperReference: "illum",
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.General.PostListRecurringDetails(ctx, shared.RecurringDetailsRequest{
        MerchantAccount: "vel",
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumRecurring.ToPointer(),
            RecurringDetailName: sdk.String("deserunt"),
            TokenService: shared.RecurringTokenServiceEnumVisatokenservice.ToPointer(),
        },
        ShopperReference: "iure",
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
            Currency: "magnam",
            Value: 891773,
        },
        BillingDate: sdk.String("ipsa"),
        BillingSequenceNumber: sdk.String("delectus"),
        DisplayedReference: sdk.String("tempora"),
        MerchantAccount: "suscipit",
        RecurringDetailReference: sdk.String("molestiae"),
        Reference: "minus",
        ShopperReference: "placeat",
        StoredPaymentMethodID: sdk.String("voluptatum"),
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
            "excepturi": "nisi",
            "recusandae": "temporibus",
        },
        Card: &shared.Card{
            Cvc: sdk.String("ab"),
            ExpiryMonth: sdk.String("quis"),
            ExpiryYear: sdk.String("veritatis"),
            HolderName: sdk.String("deserunt"),
            IssueNumber: sdk.String("perferendis"),
            Number: sdk.String("ipsam"),
            StartMonth: sdk.String("repellendus"),
            StartYear: sdk.String("sapiente"),
        },
        MerchantAccount: "quo",
        Reference: "odit",
        SelectedRecurringDetailReference: sdk.String("at"),
        ShopperReference: sdk.String("at"),
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
