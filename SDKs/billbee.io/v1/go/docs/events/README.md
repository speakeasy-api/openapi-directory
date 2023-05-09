# Events

### Available Operations

* [EventAPIGetList](#eventapigetlist) - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

## EventAPIGetList

Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Events.EventAPIGetList(ctx, operations.EventAPIGetListRequest{
        MaxDate: types.MustTimeFromString("2020-09-01T17:43:45.536Z"),
        MinDate: types.MustTimeFromString("2022-06-25T14:54:59.204Z"),
        OrderID: sdk.Int64(178367),
        Page: sdk.Int(373813),
        PageSize: sdk.Int(69859),
        TypeID: []int{
            9688,
            272822,
            892050,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventAPIGetList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
