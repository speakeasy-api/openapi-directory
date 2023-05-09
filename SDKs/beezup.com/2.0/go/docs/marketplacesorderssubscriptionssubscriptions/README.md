# MarketplacesOrdersSubscriptionsSubscriptions

### Available Operations

* [ActivateSubscription](#activatesubscription) - Activate a subscription to the orders
* [CreateSubscription](#createsubscription) - Creates a subscription to the orders
* [DeactivateSubscription](#deactivatesubscription) - Deactivate a subscription to the orders
* [DeleteSubscription](#deletesubscription) - Delete a subscription to the orders
* [GetSubscription](#getsubscription) - Get a subscription to the orders
* [GetSubscriptionList](#getsubscriptionlist) - Get the subscription list
* [GetSubscriptionPushReporting](#getsubscriptionpushreporting) - Get the push reporting related to this subscription
* [RetryPushOrders](#retrypushorders) - Force retry push orders immediatly

## ActivateSubscription

At this moment, BeezUP will ensure that your callback url is respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/Verification

After that we will send you the orders related to your subscription, respecting this specification: 
- https://api.beezup.com/swaggerhub/apis/BeezUP/public_marketplaces_orders_subscriptions_consumer-dev/1.0#/Subscriptions/PushOrders


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.ActivateSubscription(ctx, operations.ActivateSubscriptionRequest{
        ActivateSubscriptionRequest: &shared.ActivateSubscriptionRequest{
            RecoverBeginPeriodOrderLastModificationUtcDate: types.MustTimeFromString("2021-12-30T00:19:55.496Z"),
            RecoverEndPeriodOrderLastModificationUtcDate: types.MustTimeFromString("2022-01-29T08:13:54.022Z"),
        },
        ID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateSubscription

Please take a look at this sequence diagram to understand the subscription process to follow [here](https://www.websequencediagrams.com/files/render?link=SBYbeIc8NGshk6ooCbmjoBLIMl4fIGO1xjJbPBQAglBo0n6BwEReh7NXQiPSjOTX)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.CreateSubscription(ctx, operations.CreateSubscriptionRequest{
        CreateSubscriptionRequest: shared.CreateSubscriptionRequest{
            MerchantApplicationName: "MyApp",
            MerchantApplicationVersion: "1.0",
            MerchantEmailAlert: sdk.String("paulsimon@mysupercompany.com"),
            Name: "MySubscriptionName",
            TargetURL: "http://www.mydomain.com",
        },
        ID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeactivateSubscription

Deactivate a subscription to the orders

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
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.DeactivateSubscription(ctx, operations.DeactivateSubscriptionRequest{
        ID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSubscription

Delete a subscription to the orders

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
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.DeleteSubscription(ctx, operations.DeleteSubscriptionRequest{
        ID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubscription

Get a subscription to the orders

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
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.GetSubscription(ctx, operations.GetSubscriptionRequest{
        ID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionIndex != nil {
        // handle response
    }
}
```

## GetSubscriptionList

Get the subscription list

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.GetSubscriptionList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionIndices != nil {
        // handle response
    }
}
```

## GetSubscriptionPushReporting

Get the push reporting related to this subscription

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
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.GetSubscriptionPushReporting(ctx, operations.GetSubscriptionPushReportingRequest{
        ID: "repellendus",
        PageNumber: sdk.Int64(287119),
        PageSize: sdk.Int64(968287),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionPushReportings != nil {
        // handle response
    }
}
```

## RetryPushOrders

In case your subscription consumption is unavailable and your subscription is still active you can ask to retry immediatly to push orders instead of waiting the next scheduled retry date

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
    res, err := s.MarketplacesOrdersSubscriptionsSubscriptions.RetryPushOrders(ctx, operations.RetryPushOrdersRequest{
        ID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
