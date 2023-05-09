# AnalyticsGlobal

### Available Operations

* [AnalyticsIndex](#analyticsindex) - Get the Analytics API operation index
* [AnalyticsStoreIndex](#analyticsstoreindex) - Get the Analytics API operation index for one store

## AnalyticsIndex

Get the Analytics API operation index

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
    res, err := s.AnalyticsGlobal.AnalyticsIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsIndex != nil {
        // handle response
    }
}
```

## AnalyticsStoreIndex

Get the Analytics API operation index for one store

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
    res, err := s.AnalyticsGlobal.AnalyticsStoreIndex(ctx, operations.AnalyticsStoreIndexRequest{
        StoreID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyticsStoreIndex != nil {
        // handle response
    }
}
```
