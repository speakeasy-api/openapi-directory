# TypeGadgetsStock

## Overview

Search API for 'Stock Ticker' entry type

### Available Operations

* [SearchGadgetsStock](#searchgadgetsstock) - Search API for 'Stock Ticker' entry type

## SearchGadgetsStock

API to search for entries of type Stock Ticker

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
    res, err := s.TypeGadgetsStock.SearchGadgetsStock(ctx, operations.SearchGadgetsStockRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-17T04:21:28.778Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-05T06:31:50.944Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-22T14:23:17.198Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-16T14:37:42.020Z"),
        Description: sdk.String("fuga"),
        Filesuffix: sdk.String("nostrum"),
        Fromdate: types.MustTimeFromString("2021-06-17T06:18:33.339Z"),
        Group: sdk.String("delectus"),
        Max: sdk.Int64(735894),
        Maxlatitude: sdk.Float32(8786.01),
        Maxlongitude: sdk.Float32(1415.06),
        Minlatitude: sdk.Float32(9974.37),
        Minlongitude: sdk.Float32(8659.46),
        Name: sdk.String("Bessie Bayer"),
        Skip: sdk.Int64(448369),
        Text: sdk.String("ducimus"),
        Todate: types.MustTimeFromString("2022-08-28T07:07:51.380Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
