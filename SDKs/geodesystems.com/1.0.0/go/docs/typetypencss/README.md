# TypeTypeNcss

## Overview

Search API for 'NetCDF Point Subset' entry type

### Available Operations

* [SearchTypeNcss](#searchtypencss) - Search API for 'NetCDF Point Subset' entry type

## SearchTypeNcss

API to search for entries of type NetCDF Point Subset

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
    res, err := s.TypeTypeNcss.SearchTypeNcss(ctx, operations.SearchTypeNcssRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-30T15:14:52.146Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-01T20:29:09.374Z"),
        CreatedateFrom: types.MustTimeFromString("2021-09-16T06:54:29.871Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-17T16:10:20.035Z"),
        Description: sdk.String("impedit"),
        Filesuffix: sdk.String("consequuntur"),
        Fromdate: types.MustTimeFromString("2022-02-04T20:42:40.039Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(287020),
        Maxlatitude: sdk.Float32(9984.45),
        Maxlongitude: sdk.Float32(1795),
        Minlatitude: sdk.Float32(8451.91),
        Minlongitude: sdk.Float32(9999.65),
        Name: sdk.String("Ms. Calvin Nikolaus"),
        Skip: sdk.Int64(952106),
        Text: sdk.String("iure"),
        Todate: types.MustTimeFromString("2020-03-22T03:37:51.173Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
