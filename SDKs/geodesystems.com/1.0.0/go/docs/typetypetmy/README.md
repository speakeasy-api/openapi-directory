# TypeTypeTmy

## Overview

Search API for 'NREL TMY Data' entry type

### Available Operations

* [SearchTypeTmy](#searchtypetmy) - Search API for 'NREL TMY Data' entry type

## SearchTypeTmy

API to search for entries of type NREL TMY Data

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
    res, err := s.TypeTypeTmy.SearchTypeTmy(ctx, operations.SearchTypeTmyRequest{
        ChangedateFrom: types.MustTimeFromString("2021-05-18T02:30:42.135Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-11T02:17:59.836Z"),
        CreatedateFrom: types.MustTimeFromString("2021-07-28T14:30:56.159Z"),
        CreatedateTo: types.MustTimeFromString("2021-12-01T09:16:59.500Z"),
        Description: sdk.String("assumenda"),
        Filesuffix: sdk.String("laborum"),
        Fromdate: types.MustTimeFromString("2022-11-30T06:55:42.234Z"),
        Group: sdk.String("fugit"),
        Max: sdk.Int64(471317),
        Maxlatitude: sdk.Float32(8467.15),
        Maxlongitude: sdk.Float32(8601.44),
        Minlatitude: sdk.Float32(3648.57),
        Minlongitude: sdk.Float32(6073.65),
        Name: sdk.String("Darla Williamson"),
        Skip: sdk.Int64(96301),
        Text: sdk.String("inventore"),
        Todate: types.MustTimeFromString("2021-09-05T10:47:22.933Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
