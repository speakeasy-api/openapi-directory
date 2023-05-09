# TypeTypeEsriLayer

## Overview

Search API for 'ESRI Layer' entry type

### Available Operations

* [SearchTypeEsriLayer](#searchtypeesrilayer) - Search API for 'ESRI Layer' entry type

## SearchTypeEsriLayer

API to search for entries of type ESRI Layer

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
    res, err := s.TypeTypeEsriLayer.SearchTypeEsriLayer(ctx, operations.SearchTypeEsriLayerRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-09T03:32:00.669Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-12T23:23:33.737Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-13T06:58:07.900Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-07T15:17:27.791Z"),
        Description: sdk.String("ipsam"),
        Filesuffix: sdk.String("dicta"),
        Fromdate: types.MustTimeFromString("2021-06-26T09:56:08.753Z"),
        Group: sdk.String("libero"),
        Max: sdk.Int64(9912),
        Maxlatitude: sdk.Float32(5167.39),
        Maxlongitude: sdk.Float32(2725.18),
        Minlatitude: sdk.Float32(7771.93),
        Minlongitude: sdk.Float32(2244.31),
        Name: sdk.String("Geneva Kohler V"),
        SearchTypeEsriLayerLayerType: sdk.String("consectetur"),
        Skip: sdk.Int64(644103),
        Text: sdk.String("odit"),
        Todate: types.MustTimeFromString("2022-08-21T22:37:15.505Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
