# SDK

## Overview

Additional methods that allow you to manage payment details stored for recurring payments. For more information, refer to [Recurring payments](https://docs.adyen.com/developers/features/recurring-payments).

### Available Operations

* [PostDisable](#postdisable) - Disables stored payment details.
* [PostListRecurringDetails](#postlistrecurringdetails) - Retrieves stored payment details for a shopper.

## PostDisable

Disables stored payment details to stop charging a shopper with this particular recurring detail ID.

For more information, refer to [Disable stored details](https://docs.adyen.com/developers/features/recurring-payments/disable-stored-details).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostDisable(ctx, shared.DisableRequest{
        Contract: sdk.String("unde"),
        MerchantAccount: "nulla",
        RecurringDetailReference: sdk.String("corrupti"),
        ShopperReference: "illum",
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

For more information, refer to [Retrieve stored details](https://docs.adyen.com/developers/features/recurring-payments/retrieve-stored-details).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostListRecurringDetails(ctx, shared.RecurringDetailsRequest{
        MerchantAccount: "vel",
        Recurring: &shared.Recurring{
            Contract: shared.RecurringContractEnumRecurring.ToPointer(),
            RecurringDetailName: sdk.String("deserunt"),
        },
        ShopperReference: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RecurringDetailsResult != nil {
        // handle response
    }
}
```
