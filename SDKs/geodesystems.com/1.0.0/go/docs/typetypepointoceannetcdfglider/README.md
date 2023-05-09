# TypeTypePointOceanNetcdfGlider

## Overview

Search API for 'NetCDF Glider Data' entry type

### Available Operations

* [SearchTypePointOceanNetcdfGlider](#searchtypepointoceannetcdfglider) - Search API for 'NetCDF Glider Data' entry type

## SearchTypePointOceanNetcdfGlider

API to search for entries of type NetCDF Glider Data

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
    res, err := s.TypeTypePointOceanNetcdfGlider.SearchTypePointOceanNetcdfGlider(ctx, operations.SearchTypePointOceanNetcdfGliderRequest{
        ChangedateFrom: types.MustTimeFromString("2021-12-30T16:10:24.701Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-17T17:28:36.302Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-09T08:30:53.107Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-20T23:52:32.501Z"),
        Description: sdk.String("corporis"),
        Filesuffix: sdk.String("consequuntur"),
        Fromdate: types.MustTimeFromString("2022-08-15T13:53:40.574Z"),
        Group: sdk.String("quis"),
        Max: sdk.Int64(747358),
        Maxlatitude: sdk.Float32(1074.24),
        Maxlongitude: sdk.Float32(8313.04),
        Minlatitude: sdk.Float32(4021.21),
        Minlongitude: sdk.Float32(1628.49),
        Name: sdk.String("Loren Schuster"),
        SearchTypePointOceanNetcdfTrackPlatform: sdk.String("debitis"),
        Skip: sdk.Int64(100926),
        Text: sdk.String("reiciendis"),
        Todate: types.MustTimeFromString("2022-11-16T13:43:29.251Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
