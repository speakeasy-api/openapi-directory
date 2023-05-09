# TypePasteitentry

## Overview

Search API for 'Paste Text Entry' entry type

### Available Operations

* [SearchPasteitentry](#searchpasteitentry) - Search API for 'Paste Text Entry' entry type

## SearchPasteitentry

API to search for entries of type Paste Text Entry

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
    res, err := s.TypePasteitentry.SearchPasteitentry(ctx, operations.SearchPasteitentryRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-10T06:44:39.892Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-29T22:58:48.514Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-03T03:35:37.503Z"),
        CreatedateTo: types.MustTimeFromString("2021-07-17T02:21:21.661Z"),
        Description: sdk.String("iste"),
        Filesuffix: sdk.String("illo"),
        Fromdate: types.MustTimeFromString("2021-05-05T02:52:31.067Z"),
        Group: sdk.String("temporibus"),
        Max: sdk.Int64(576657),
        Maxlatitude: sdk.Float32(4834.59),
        Maxlongitude: sdk.Float32(3156.71),
        Minlatitude: sdk.Float32(8811.89),
        Minlongitude: sdk.Float32(444.67),
        Name: sdk.String("Miss Dwight Goldner"),
        Skip: sdk.Int64(526584),
        Text: sdk.String("tenetur"),
        Todate: types.MustTimeFromString("2022-06-21T13:56:00.357Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
