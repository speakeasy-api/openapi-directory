# TypeUsPlaces

## Overview

Search API for 'US Places' entry type

### Available Operations

* [SearchUsPlaces](#searchusplaces) - Search API for 'US Places' entry type

## SearchUsPlaces

API to search for entries of type US Places

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
    res, err := s.TypeUsPlaces.SearchUsPlaces(ctx, operations.SearchUsPlacesRequest{
        ChangedateFrom: types.MustTimeFromString("2021-04-19T11:04:28.882Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-21T16:06:20.452Z"),
        CreatedateFrom: types.MustTimeFromString("2021-02-15T04:54:44.081Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-24T17:01:43.460Z"),
        Description: sdk.String("eligendi"),
        Filesuffix: sdk.String("veniam"),
        Fromdate: types.MustTimeFromString("2022-10-08T08:25:57.966Z"),
        Group: sdk.String("repellat"),
        Max: sdk.Int64(377691),
        Maxlatitude: sdk.Float32(8014.05),
        Maxlongitude: sdk.Float32(2030.87),
        Minlatitude: sdk.Float32(6126.97),
        Minlongitude: sdk.Float32(7195.75),
        Name: sdk.String("Kristopher Abernathy"),
        SearchDbUsPlacesCountyName: sdk.String("qui"),
        SearchDbUsPlacesElevInFt: sdk.Float64(5936.22),
        SearchDbUsPlacesFeatureClass: sdk.String("accusantium"),
        SearchDbUsPlacesFeatureName: sdk.String("voluptatibus"),
        SearchDbUsPlacesLocation: sdk.String("occaecati"),
        SearchDbUsPlacesStateAlpha: sdk.String("nemo"),
        Skip: sdk.Int64(462673),
        Text: sdk.String("reiciendis"),
        Todate: types.MustTimeFromString("2022-06-26T19:47:17.716Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
