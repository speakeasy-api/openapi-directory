# Rankings

## Overview

Historical poll rankings

### Available Operations

* [GetRankings](#getrankings) - Historical polls and rankings

## GetRankings

Poll rankings

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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Rankings.GetRankings(ctx, operations.GetRankingsRequest{
        SeasonType: sdk.String("perferendis"),
        Week: sdk.Int64(39187),
        Year: 441711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RankingWeeks != nil {
        // handle response
    }
}
```
