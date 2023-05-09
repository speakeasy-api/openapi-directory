# TypeTypePointNetcdf

## Overview

Search API for 'NetCDF Point File' entry type

### Available Operations

* [SearchTypePointNetcdf](#searchtypepointnetcdf) - Search API for 'NetCDF Point File' entry type

## SearchTypePointNetcdf

API to search for entries of type NetCDF Point File

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
    res, err := s.TypeTypePointNetcdf.SearchTypePointNetcdf(ctx, operations.SearchTypePointNetcdfRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-22T21:28:33.711Z"),
        ChangedateTo: types.MustTimeFromString("2021-10-03T04:08:50.103Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-24T13:14:37.287Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-07T11:36:17.844Z"),
        Description: sdk.String("in"),
        Filesuffix: sdk.String("rerum"),
        Fromdate: types.MustTimeFromString("2021-12-29T07:13:23.289Z"),
        Group: sdk.String("saepe"),
        Max: sdk.Int64(25737),
        Maxlatitude: sdk.Float32(7625.4),
        Maxlongitude: sdk.Float32(7743.53),
        Minlatitude: sdk.Float32(5493.32),
        Minlongitude: sdk.Float32(5603.74),
        Name: sdk.String("Carolyn Macejkovic"),
        Skip: sdk.Int64(287293),
        Text: sdk.String("nulla"),
        Todate: types.MustTimeFromString("2022-12-21T09:24:31.624Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
