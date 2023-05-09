# TypeTypePointNoaaCarbon

## Overview

Search API for 'NOAA Carbon Measurements' entry type

### Available Operations

* [SearchTypePointNoaaCarbon](#searchtypepointnoaacarbon) - Search API for 'NOAA Carbon Measurements' entry type

## SearchTypePointNoaaCarbon

API to search for entries of type NOAA Carbon Measurements

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
    res, err := s.TypeTypePointNoaaCarbon.SearchTypePointNoaaCarbon(ctx, operations.SearchTypePointNoaaCarbonRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-30T03:55:16.926Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-17T07:41:52.559Z"),
        CreatedateFrom: types.MustTimeFromString("2021-05-24T06:04:24.357Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-26T13:41:14.544Z"),
        Description: sdk.String("facere"),
        Filesuffix: sdk.String("pariatur"),
        Fromdate: types.MustTimeFromString("2022-06-02T20:48:09.142Z"),
        Group: sdk.String("commodi"),
        Max: sdk.Int64(649511),
        Maxlatitude: sdk.Float32(6296.18),
        Maxlongitude: sdk.Float32(964.95),
        Minlatitude: sdk.Float32(7785.85),
        Minlongitude: sdk.Float32(9744.29),
        Name: sdk.String("Angel Schumm"),
        SearchTypePointNoaaCarbonLabIDNumber: sdk.String("blanditiis"),
        SearchTypePointNoaaCarbonMeasurementGroup: sdk.String("assumenda"),
        SearchTypePointNoaaCarbonParameter: sdk.String("culpa"),
        SearchTypePointNoaaCarbonProject: sdk.String("ipsa"),
        SearchTypePointNoaaCarbonSiteID: sdk.String("inventore"),
        Skip: sdk.Int64(200170),
        Text: sdk.String("et"),
        Todate: types.MustTimeFromString("2022-11-05T05:50:08.633Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
