# TypeTypeWmsCapabilities

## Overview

Search API for 'WMS Capabilities' entry type

### Available Operations

* [SearchTypeWmsCapabilities](#searchtypewmscapabilities) - Search API for 'WMS Capabilities' entry type

## SearchTypeWmsCapabilities

API to search for entries of type WMS Capabilities

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
    res, err := s.TypeTypeWmsCapabilities.SearchTypeWmsCapabilities(ctx, operations.SearchTypeWmsCapabilitiesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-20T22:46:34.076Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-20T13:26:35.144Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-20T15:27:19.301Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-29T20:23:21.998Z"),
        Description: sdk.String("impedit"),
        Filesuffix: sdk.String("consectetur"),
        Fromdate: types.MustTimeFromString("2022-09-20T03:50:22.008Z"),
        Group: sdk.String("est"),
        Max: sdk.Int64(682847),
        Maxlatitude: sdk.Float32(2877.97),
        Maxlongitude: sdk.Float32(2404.48),
        Minlatitude: sdk.Float32(1871.04),
        Minlongitude: sdk.Float32(7403.31),
        Name: sdk.String("Ms. Jackie Torphy"),
        Skip: sdk.Int64(225415),
        Text: sdk.String("minus"),
        Todate: types.MustTimeFromString("2022-11-14T19:42:10.801Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
