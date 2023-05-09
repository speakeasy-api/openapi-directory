# Subscriptions

## Overview

Subscribe to be alerted when events occur. For example receive email notification when a contribution is flagged.

### Available Operations

* [DeleteSubscriptionsID](#deletesubscriptionsid) - Delete a subscription.
* [GetSubscriptionTypes](#getsubscriptiontypes) - Subscription types
* [GetSubscriptions](#getsubscriptions) - List subscriptions for the authorised user.

## DeleteSubscriptionsID

Delete a subscription.

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
    res, err := s.Subscriptions.DeleteSubscriptionsID(ctx, operations.DeleteSubscriptionsIDRequest{
        ID: "72e80285-7a5b-4404-a3a7-d575f1400e76",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSubscriptionTypes

List available subscription types

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
    res, err := s.Subscriptions.GetSubscriptionTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscriptionTypes != nil {
        // handle response
    }
}
```

## GetSubscriptions

List subscriptions for the authorised user.

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
    res, err := s.Subscriptions.GetSubscriptions(ctx, shared.SubscriptionSubmission{
        Assignment: sdk.String("numquam"),
        Email: sdk.String("Reta20@hotmail.com"),
        IncludeBody: false,
        IncludeThumbenail: sdk.Bool(false),
        SlackChannel: sdk.String("quaerat"),
        Types: []string{
            "minus",
            "sunt",
            "distinctio",
            "iusto",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Subscriptions != nil {
        // handle response
    }
}
```
