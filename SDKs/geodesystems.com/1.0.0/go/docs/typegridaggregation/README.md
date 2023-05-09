# TypeGridaggregation

## Overview

Search API for 'Grid Aggregation' entry type

### Available Operations

* [SearchGridaggregation](#searchgridaggregation) - Search API for 'Grid Aggregation' entry type

## SearchGridaggregation

API to search for entries of type Grid Aggregation

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
    res, err := s.TypeGridaggregation.SearchGridaggregation(ctx, operations.SearchGridaggregationRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-19T18:24:49.544Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-26T17:47:50.539Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-19T16:26:34.311Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-14T14:18:21.018Z"),
        Description: sdk.String("quas"),
        Filesuffix: sdk.String("et"),
        Fromdate: types.MustTimeFromString("2022-07-17T15:04:57.362Z"),
        Group: sdk.String("autem"),
        Max: sdk.Int64(685415),
        Maxlatitude: sdk.Float32(53.1),
        Maxlongitude: sdk.Float32(5264.13),
        Minlatitude: sdk.Float32(113.55),
        Minlongitude: sdk.Float32(5500.55),
        Name: sdk.String("Mr. Marcos Boehm"),
        Skip: sdk.Int64(965517),
        Text: sdk.String("mollitia"),
        Todate: types.MustTimeFromString("2021-01-29T04:57:19.341Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
