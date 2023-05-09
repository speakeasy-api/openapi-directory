# TypeEarthSatelliteLandsat

## Overview

Search API for 'Landsat Satellite Data' entry type

### Available Operations

* [SearchEarthSatelliteLandsat](#searchearthsatellitelandsat) - Search API for 'Landsat Satellite Data' entry type

## SearchEarthSatelliteLandsat

API to search for entries of type Landsat Satellite Data

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
    res, err := s.TypeEarthSatelliteLandsat.SearchEarthSatelliteLandsat(ctx, operations.SearchEarthSatelliteLandsatRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-13T20:31:38.306Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-19T19:28:46.304Z"),
        CreatedateFrom: types.MustTimeFromString("2021-12-21T17:45:55.733Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-26T09:57:27.688Z"),
        Description: sdk.String("rem"),
        Filesuffix: sdk.String("fugiat"),
        Fromdate: types.MustTimeFromString("2022-08-09T15:02:09.217Z"),
        Group: sdk.String("consequuntur"),
        Max: sdk.Int64(233078),
        Maxlatitude: sdk.Float32(468.06),
        Maxlongitude: sdk.Float32(5854.32),
        Minlatitude: sdk.Float32(9707.32),
        Minlongitude: sdk.Float32(7468.37),
        Name: sdk.String("Belinda Daugherty"),
        SearchEarthSatelliteLandsatArchiveVersionNumber: sdk.Int64(170099),
        SearchEarthSatelliteLandsatGroundStation: sdk.String("inventore"),
        SearchEarthSatelliteLandsatSatellite: sdk.String("fuga"),
        SearchEarthSatelliteLandsatSensor: sdk.String("accusamus"),
        SearchEarthSatelliteLandsatWrsPathNumber: sdk.Int64(976802),
        SearchEarthSatelliteLandsatWrsRowNumber: sdk.Int64(719620),
        Skip: sdk.Int64(608593),
        Text: sdk.String("delectus"),
        Todate: types.MustTimeFromString("2022-06-29T17:06:44.946Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
