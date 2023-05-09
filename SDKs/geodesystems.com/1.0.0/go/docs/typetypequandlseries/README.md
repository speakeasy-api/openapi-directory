# TypeTypeQuandlSeries

## Overview

Search API for 'QUANDL Series' entry type

### Available Operations

* [SearchTypeQuandlSeries](#searchtypequandlseries) - Search API for 'QUANDL Series' entry type

## SearchTypeQuandlSeries

API to search for entries of type QUANDL Series

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
    res, err := s.TypeTypeQuandlSeries.SearchTypeQuandlSeries(ctx, operations.SearchTypeQuandlSeriesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-05T22:27:28.341Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-22T03:39:05.204Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-24T20:43:14.437Z"),
        CreatedateTo: types.MustTimeFromString("2021-06-29T17:11:28.894Z"),
        Description: sdk.String("impedit"),
        Filesuffix: sdk.String("officia"),
        Fromdate: types.MustTimeFromString("2022-07-19T09:06:20.044Z"),
        Group: sdk.String("mollitia"),
        Max: sdk.Int64(918967),
        Maxlatitude: sdk.Float32(7354.1),
        Maxlongitude: sdk.Float32(4526.05),
        Minlatitude: sdk.Float32(7378.82),
        Minlongitude: sdk.Float32(4611.03),
        Name: sdk.String("Kathryn Bradtke"),
        Skip: sdk.Int64(168512),
        Text: sdk.String("quae"),
        Todate: types.MustTimeFromString("2022-08-14T05:00:36.286Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
