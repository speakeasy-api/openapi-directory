# TypeFeed

## Overview

Search API for 'RSS/ATOM Feed' entry type

### Available Operations

* [SearchFeed](#searchfeed) - Search API for 'RSS/ATOM Feed' entry type

## SearchFeed

API to search for entries of type RSS/ATOM Feed

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
    res, err := s.TypeFeed.SearchFeed(ctx, operations.SearchFeedRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-04T04:25:17.046Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-17T16:07:37.080Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-15T20:15:24.019Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-20T23:08:11.095Z"),
        Description: sdk.String("inventore"),
        Filesuffix: sdk.String("dolorem"),
        Fromdate: types.MustTimeFromString("2022-10-26T04:37:41.230Z"),
        Group: sdk.String("iste"),
        Max: sdk.Int64(403026),
        Maxlatitude: sdk.Float32(3676.26),
        Maxlongitude: sdk.Float32(7452.33),
        Minlatitude: sdk.Float32(7262.27),
        Minlongitude: sdk.Float32(5269.07),
        Name: sdk.String("Mr. Lonnie Considine"),
        Skip: sdk.Int64(64435),
        Text: sdk.String("quae"),
        Todate: types.MustTimeFromString("2022-10-16T23:42:04.526Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
