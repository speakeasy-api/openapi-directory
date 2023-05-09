# TypeTypePointIcebridgeParis

## Overview

Search API for 'Paris Data' entry type

### Available Operations

* [SearchTypePointIcebridgeParis](#searchtypepointicebridgeparis) - Search API for 'Paris Data' entry type

## SearchTypePointIcebridgeParis

API to search for entries of type Paris Data

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
    res, err := s.TypeTypePointIcebridgeParis.SearchTypePointIcebridgeParis(ctx, operations.SearchTypePointIcebridgeParisRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-19T21:00:17.683Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-26T02:18:03.425Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-05T04:44:20.086Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-05T07:29:58.783Z"),
        Description: sdk.String("ducimus"),
        Filesuffix: sdk.String("dolores"),
        Fromdate: types.MustTimeFromString("2021-04-03T20:48:28.253Z"),
        Group: sdk.String("doloremque"),
        Max: sdk.Int64(503802),
        Maxlatitude: sdk.Float32(3011.55),
        Maxlongitude: sdk.Float32(5713.81),
        Minlatitude: sdk.Float32(8518.94),
        Minlongitude: sdk.Float32(3849.39),
        Name: sdk.String("Dexter Shields"),
        Skip: sdk.Int64(908127),
        Text: sdk.String("optio"),
        Todate: types.MustTimeFromString("2022-01-06T04:00:38.682Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
