# TypeTypeFredSeries

## Overview

Search API for 'FRED Series' entry type

### Available Operations

* [SearchTypeFredSeries](#searchtypefredseries) - Search API for 'FRED Series' entry type

## SearchTypeFredSeries

API to search for entries of type FRED Series

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
    res, err := s.TypeTypeFredSeries.SearchTypeFredSeries(ctx, operations.SearchTypeFredSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2021-01-16T11:29:04.824Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-27T07:32:45.617Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-08T17:14:19.851Z"),
        CreatedateTo: types.MustTimeFromString("2021-08-14T15:31:01.936Z"),
        Description: sdk.String("explicabo"),
        Filesuffix: sdk.String("delectus"),
        Fromdate: types.MustTimeFromString("2021-12-06T15:54:45.514Z"),
        Group: sdk.String("enim"),
        Max: sdk.Int64(24614),
        Maxlatitude: sdk.Float32(279.55),
        Maxlongitude: sdk.Float32(6197.72),
        Minlatitude: sdk.Float32(293.46),
        Minlongitude: sdk.Float32(2712.16),
        Name: sdk.String("Roger Boehm V"),
        Skip: sdk.Int64(172878),
        Text: sdk.String("perferendis"),
        Todate: types.MustTimeFromString("2022-06-10T22:44:59.336Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
