# TypeTypeMb

## Overview

Search API for 'MB Bathymetry' entry type

### Available Operations

* [SearchTypeMb](#searchtypemb) - Search API for 'MB Bathymetry' entry type

## SearchTypeMb

API to search for entries of type MB Bathymetry

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
    res, err := s.TypeTypeMb.SearchTypeMb(ctx, operations.SearchTypeMbRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-17T16:31:04.532Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-28T01:35:11.563Z"),
        CreatedateFrom: types.MustTimeFromString("2020-01-05T05:37:18.912Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-12T12:22:15.424Z"),
        Description: sdk.String("distinctio"),
        Filesuffix: sdk.String("quaerat"),
        Fromdate: types.MustTimeFromString("2022-05-17T18:52:45.867Z"),
        Group: sdk.String("nihil"),
        Max: sdk.Int64(928102),
        Maxlatitude: sdk.Float32(2538.55),
        Maxlongitude: sdk.Float32(6520.13),
        Minlatitude: sdk.Float32(6515.04),
        Minlongitude: sdk.Float32(5043.86),
        Name: sdk.String("Dianne Hayes"),
        Skip: sdk.Int64(614175),
        Text: sdk.String("ea"),
        Todate: types.MustTimeFromString("2022-07-20T10:09:28.379Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
