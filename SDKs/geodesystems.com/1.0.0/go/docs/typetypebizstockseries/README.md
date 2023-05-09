# TypeTypeBizStockseries

## Overview

Search API for 'Stock Ticker Data' entry type

### Available Operations

* [SearchTypeBizStockseries](#searchtypebizstockseries) - Search API for 'Stock Ticker Data' entry type

## SearchTypeBizStockseries

API to search for entries of type Stock Ticker Data

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
    res, err := s.TypeTypeBizStockseries.SearchTypeBizStockseries(ctx, operations.SearchTypeBizStockseriesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-28T10:28:14.400Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-19T20:55:13.479Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-16T05:04:45.088Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-03T05:07:19.458Z"),
        Description: sdk.String("adipisci"),
        Filesuffix: sdk.String("cupiditate"),
        Fromdate: types.MustTimeFromString("2022-06-26T15:12:35.709Z"),
        Group: sdk.String("fugiat"),
        Max: sdk.Int64(473386),
        Maxlatitude: sdk.Float32(5568.98),
        Maxlongitude: sdk.Float32(8341.77),
        Minlatitude: sdk.Float32(9065.24),
        Minlongitude: sdk.Float32(2304),
        Name: sdk.String("Cecil Tromp"),
        Skip: sdk.Int64(545629),
        Text: sdk.String("cupiditate"),
        Todate: types.MustTimeFromString("2021-12-08T15:04:06.780Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
