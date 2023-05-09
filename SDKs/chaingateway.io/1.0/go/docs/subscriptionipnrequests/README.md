# SubscriptionIPNRequests

## Overview

Requests for creating, deleting and listing existing subscriptions

### Available Operations

* [ListFailedIPNs](#listfailedipns) - listFailedIPNs
* [ListSubscribedAddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [ResendFailedIPN](#resendfailedipn) - resendFailedIPN
* [SubscribeAddress](#subscribeaddress) - subscribeAddress
* [UnsubscribeAddress](#unsubscribeaddress) - unsubscribeAddress

## ListFailedIPNs

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.SubscriptionIPNRequests.ListFailedIPNs(ctx, operations.ListFailedIPNsRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFailedIPNs != nil {
        // handle response
    }
}
```

## ListSubscribedAddresses

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.SubscriptionIPNRequests.ListSubscribedAddresses(ctx, operations.ListSubscribedAddressesRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ContentType: "application/json",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSubscribedAddresses != nil {
        // handle response
    }
}
```

## ResendFailedIPN

Returns all subscriptions/IPNs created with an account.

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
    res, err := s.SubscriptionIPNRequests.ResendFailedIPN(ctx, operations.ResendFailedIPNRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        ResendFailedIPNRequest: shared.ResendFailedIPNRequest{
            ID: 568434,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResendFailedIPN != nil {
        // handle response
    }
}
```

## SubscribeAddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


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
    res, err := s.SubscriptionIPNRequests.SubscribeAddress(ctx, operations.SubscribeAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        SubscribeAddressRequest: shared.SubscribeAddressRequest{
            Contractaddress: "aspernatur",
            Ethereumaddress: "perferendis",
            URL: "ad",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubscribeAddress != nil {
        // handle response
    }
}
```

## UnsubscribeAddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

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
    res, err := s.SubscriptionIPNRequests.UnsubscribeAddress(ctx, operations.UnsubscribeAddressRequest{
        Authorization: "q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",
        UnsubscribeAddressRequest: shared.UnsubscribeAddressRequest{
            Contractaddress: "natus",
            Ethereumaddress: "sed",
            URL: "iste",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UnsubscribeAddress != nil {
        // handle response
    }
}
```
