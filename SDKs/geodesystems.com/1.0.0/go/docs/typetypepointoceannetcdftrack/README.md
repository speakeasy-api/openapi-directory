# TypeTypePointOceanNetcdfTrack

## Overview

Search API for 'NetCDF Track Data' entry type

### Available Operations

* [SearchTypePointOceanNetcdfTrack](#searchtypepointoceannetcdftrack) - Search API for 'NetCDF Track Data' entry type

## SearchTypePointOceanNetcdfTrack

API to search for entries of type NetCDF Track Data

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
    res, err := s.TypeTypePointOceanNetcdfTrack.SearchTypePointOceanNetcdfTrack(ctx, operations.SearchTypePointOceanNetcdfTrackRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-02T13:17:48.183Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-15T02:21:50.640Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-07T10:08:56.987Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-21T23:31:37.125Z"),
        Description: sdk.String("sint"),
        Filesuffix: sdk.String("accusamus"),
        Fromdate: types.MustTimeFromString("2021-02-14T13:20:05.965Z"),
        Group: sdk.String("consequuntur"),
        Max: sdk.Int64(318471),
        Maxlatitude: sdk.Float32(7926.76),
        Maxlongitude: sdk.Float32(8421.68),
        Minlatitude: sdk.Float32(348.63),
        Minlongitude: sdk.Float32(8588.57),
        Name: sdk.String("Geneva Stamm"),
        SearchTypePointOceanNetcdfTrackPlatform: sdk.String("sint"),
        Skip: sdk.Int64(984080),
        Text: sdk.String("magnam"),
        Todate: types.MustTimeFromString("2022-05-20T02:43:28.817Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
