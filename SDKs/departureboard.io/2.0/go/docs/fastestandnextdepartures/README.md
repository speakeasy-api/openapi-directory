# FastestAndNextDepartures

### Available Operations

* [GetFastestDeparturesByCRS](#getfastestdeparturesbycrs) - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
* [GetNextDeparturesByCRS](#getnextdeparturesbycrs) - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

## GetFastestDeparturesByCRS

getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.

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
    res, err := s.FastestAndNextDepartures.GetFastestDeparturesByCRS(ctx, operations.GetFastestDeparturesByCRSRequest{
        Crs: "recusandae",
        APIKey: "temporibus",
        FilterList: "ab",
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(337396),
        TimeWindow: sdk.Int64(87129),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNextDeparturesByCRS

getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.

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
    res, err := s.FastestAndNextDepartures.GetNextDeparturesByCRS(ctx, operations.GetNextDeparturesByCRSRequest{
        Crs: "deserunt",
        APIKey: "perferendis",
        FilterList: "ipsam",
        ServiceDetails: sdk.Bool(false),
        TimeOffset: sdk.Int64(832620),
        TimeWindow: sdk.Int64(957156),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
