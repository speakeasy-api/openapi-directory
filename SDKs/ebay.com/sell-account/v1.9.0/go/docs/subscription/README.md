# Subscription

### Available Operations

* [GetSubscription](#getsubscription) - This method retrieves a list of subscriptions associated with the seller account.

## GetSubscription

This method retrieves a list of subscriptions associated with the seller account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Subscription.GetSubscription(ctx, operations.GetSubscriptionRequest{
        ContinuationToken: sdk.String("non"),
        Limit: sdk.String("et"),
    }, operations.GetSubscriptionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionResponse != nil {
        // handle response
    }
}
```
