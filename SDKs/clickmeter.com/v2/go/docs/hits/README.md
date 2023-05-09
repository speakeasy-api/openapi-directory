# Hits

### Available Operations

* [HitsGetHits](#hitsgethits) - Retrieve the list of events related to this account.

## HitsGetHits

Retrieve the list of events related to this account.

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
    res, err := s.Hits.HitsGetHits(ctx, operations.HitsGetHitsRequest{
        Filter: operations.HitsGetHitsFilterEnumUniques.ToPointer(),
        FromDay: sdk.String("quae"),
        Limit: sdk.Int(229567),
        Offset: sdk.String("illum"),
        Timeframe: operations.HitsGetHitsTimeframeEnumPreviousmonth,
        ToDay: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoClickStreamHitListPage != nil {
        // handle response
    }
}
```
