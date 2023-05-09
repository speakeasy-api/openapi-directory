# TypeTypeNitf

## Overview

Search API for 'NITF File' entry type

### Available Operations

* [SearchTypeNitf](#searchtypenitf) - Search API for 'NITF File' entry type

## SearchTypeNitf

API to search for entries of type NITF File

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
    res, err := s.TypeTypeNitf.SearchTypeNitf(ctx, operations.SearchTypeNitfRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-25T00:43:44.722Z"),
        ChangedateTo: types.MustTimeFromString("2022-11-28T17:38:41.350Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-28T01:30:23.895Z"),
        CreatedateTo: types.MustTimeFromString("2020-04-15T19:19:31.225Z"),
        Description: sdk.String("sunt"),
        Filesuffix: sdk.String("in"),
        Fromdate: types.MustTimeFromString("2022-11-07T00:41:11.481Z"),
        Group: sdk.String("voluptatem"),
        Max: sdk.Int64(593830),
        Maxlatitude: sdk.Float32(6224.85),
        Maxlongitude: sdk.Float32(5376.23),
        Minlatitude: sdk.Float32(3151.9),
        Minlongitude: sdk.Float32(1984.06),
        Name: sdk.String("Stuart Witting"),
        Skip: sdk.Int64(238371),
        Text: sdk.String("pariatur"),
        Todate: types.MustTimeFromString("2022-04-09T18:48:48.082Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
