# AnalyticsTracking

### Available Operations

* [GetStoreTrackedClicks](#getstoretrackedclicks) - Get the latest tracked clicks
* [GetStoreTrackedExternalOrders](#getstoretrackedexternalorders) - Get the latest tracked external orders
* [GetStoreTrackedOrders](#getstoretrackedorders) - Get the latest tracked orders
* [GetStoreTrackingStatus](#getstoretrackingstatus) - Get the synchronization status of clicks and orders of a store
* [GetTrackingStatus](#gettrackingstatus) - Get the global synchronization status of clicks and orders

## GetStoreTrackedClicks

Get the latest tracked clicks

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
    res, err := s.AnalyticsTracking.GetStoreTrackedClicks(ctx, operations.GetStoreTrackedClicksRequest{
        Count: sdk.Int64(93940),
        StoreID: "repudiandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackedClicks != nil {
        // handle response
    }
}
```

## GetStoreTrackedExternalOrders

Get the latest tracked external orders

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
    res, err := s.AnalyticsTracking.GetStoreTrackedExternalOrders(ctx, operations.GetStoreTrackedExternalOrdersRequest{
        Count: sdk.Int64(575947),
        StoreID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackedExternalOrders != nil {
        // handle response
    }
}
```

## GetStoreTrackedOrders

Get the latest tracked orders

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
    res, err := s.AnalyticsTracking.GetStoreTrackedOrders(ctx, operations.GetStoreTrackedOrdersRequest{
        Count: sdk.Int64(929297),
        StoreID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackedOrders != nil {
        // handle response
    }
}
```

## GetStoreTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current state of projections for a store.


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
    res, err := s.AnalyticsTracking.GetStoreTrackingStatus(ctx, operations.GetStoreTrackingStatusRequest{
        StoreID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StoreTrackingStatus != nil {
        // handle response
    }
}
```

## GetTrackingStatus

Clicks and orders are eventually consistent. \
This operation gets the current global state of projections.


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
    res, err := s.AnalyticsTracking.GetTrackingStatus(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TrackingStatus != nil {
        // handle response
    }
}
```
