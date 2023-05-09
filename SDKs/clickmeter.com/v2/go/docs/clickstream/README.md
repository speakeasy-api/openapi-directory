# ClickStream

### Available Operations

* [ClickStreamGet](#clickstreamget) - Retrieve the latest list of events of this account. Limited to last 100.

## ClickStreamGet

Retrieve the latest list of events of this account. Limited to last 100.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.ClickStream.ClickStreamGet(ctx, operations.ClickStreamGetRequest{
        Conversion: sdk.Int64(730856),
        Datapoint: sdk.Int64(880298),
        Filter: operations.ClickStreamGetFilterEnumSpiders.ToPointer(),
        Group: sdk.Int64(313692),
        PageSize: sdk.Int(213312),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoClickStreamHit != nil {
        // handle response
    }
}
```
