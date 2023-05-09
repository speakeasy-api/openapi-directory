# TypeTypeDaymet

## Overview

Search API for 'Daymet Daily Weather' entry type

### Available Operations

* [SearchTypeDaymet](#searchtypedaymet) - Search API for 'Daymet Daily Weather' entry type

## SearchTypeDaymet

API to search for entries of type Daymet Daily Weather

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
    res, err := s.TypeTypeDaymet.SearchTypeDaymet(ctx, operations.SearchTypeDaymetRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-06T19:59:53.042Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-13T12:14:41.518Z"),
        CreatedateFrom: types.MustTimeFromString("2020-02-03T17:51:05.151Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-07T17:15:50.087Z"),
        Description: sdk.String("accusantium"),
        Filesuffix: sdk.String("voluptates"),
        Fromdate: types.MustTimeFromString("2021-01-16T17:23:13.201Z"),
        Group: sdk.String("quaerat"),
        Max: sdk.Int64(256647),
        Maxlatitude: sdk.Float32(2482.76),
        Maxlongitude: sdk.Float32(7410.24),
        Minlatitude: sdk.Float32(2779.35),
        Minlongitude: sdk.Float32(1754.55),
        Name: sdk.String("Marcia Rempel"),
        Skip: sdk.Int64(179588),
        Text: sdk.String("quisquam"),
        Todate: types.MustTimeFromString("2021-05-04T22:57:21.083Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
