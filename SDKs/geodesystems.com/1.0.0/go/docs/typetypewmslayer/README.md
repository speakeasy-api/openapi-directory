# TypeTypeWmsLayer

## Overview

Search API for 'WMS Layer' entry type

### Available Operations

* [SearchTypeWmsLayer](#searchtypewmslayer) - Search API for 'WMS Layer' entry type

## SearchTypeWmsLayer

API to search for entries of type WMS Layer

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
    res, err := s.TypeTypeWmsLayer.SearchTypeWmsLayer(ctx, operations.SearchTypeWmsLayerRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-01T12:28:26.841Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-10T23:32:47.792Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-27T21:05:50.390Z"),
        CreatedateTo: types.MustTimeFromString("2021-11-26T14:13:16.580Z"),
        Description: sdk.String("sit"),
        Filesuffix: sdk.String("magni"),
        Fromdate: types.MustTimeFromString("2021-04-28T20:12:59.192Z"),
        Group: sdk.String("ratione"),
        Max: sdk.Int64(958592),
        Maxlatitude: sdk.Float32(47.68),
        Maxlongitude: sdk.Float32(8297.66),
        Minlatitude: sdk.Float32(3011.88),
        Minlongitude: sdk.Float32(3401.07),
        Name: sdk.String("Gerardo Gislason"),
        Skip: sdk.Int64(748266),
        Text: sdk.String("ea"),
        Todate: types.MustTimeFromString("2022-09-15T14:22:34.731Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
