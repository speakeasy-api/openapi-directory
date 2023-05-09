# TypeBioStockholm

## Overview

Search API for 'Stockholm File' entry type

### Available Operations

* [SearchBioStockholm](#searchbiostockholm) - Search API for 'Stockholm File' entry type

## SearchBioStockholm

API to search for entries of type Stockholm File

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
    res, err := s.TypeBioStockholm.SearchBioStockholm(ctx, operations.SearchBioStockholmRequest{
        ChangedateFrom: types.MustTimeFromString("2020-08-21T15:23:31.740Z"),
        ChangedateTo: types.MustTimeFromString("2021-03-07T21:49:29.078Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-13T06:47:27.001Z"),
        CreatedateTo: types.MustTimeFromString("2021-08-20T14:09:47.998Z"),
        Description: sdk.String("consectetur"),
        Filesuffix: sdk.String("vero"),
        Fromdate: types.MustTimeFromString("2021-07-10T23:11:25.857Z"),
        Group: sdk.String("hic"),
        Max: sdk.Int64(715561),
        Maxlatitude: sdk.Float32(7992.03),
        Maxlongitude: sdk.Float32(4861.6),
        Minlatitude: sdk.Float32(6304.48),
        Minlongitude: sdk.Float32(7085.48),
        Name: sdk.String("Allan Greenholt"),
        Skip: sdk.Int64(194342),
        Text: sdk.String("natus"),
        Todate: types.MustTimeFromString("2022-12-17T12:08:06.467Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
