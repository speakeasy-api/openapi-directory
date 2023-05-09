# TypeLocations

## Overview

Search API for 'Locations' entry type

### Available Operations

* [SearchLocations](#searchlocations) - Search API for 'Locations' entry type

## SearchLocations

API to search for entries of type Locations

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
    res, err := s.TypeLocations.SearchLocations(ctx, operations.SearchLocationsRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-23T12:52:34.546Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-08T04:42:37.704Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-17T18:03:37.666Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-30T13:07:06.451Z"),
        Description: sdk.String("quasi"),
        Filesuffix: sdk.String("neque"),
        Fromdate: types.MustTimeFromString("2021-04-20T21:19:50.796Z"),
        Group: sdk.String("accusantium"),
        Max: sdk.Int64(185816),
        Maxlatitude: sdk.Float32(7712.41),
        Maxlongitude: sdk.Float32(1047.36),
        Minlatitude: sdk.Float32(2783.29),
        Minlongitude: sdk.Float32(1165.58),
        Name: sdk.String("Miss Dana Prohaska"),
        SearchDbLocationsLocation: sdk.String("accusantium"),
        SearchDbLocationsName: sdk.String("id"),
        SearchDbLocationsType: sdk.String("laboriosam"),
        Skip: sdk.Int64(401688),
        Text: sdk.String("quas"),
        Todate: types.MustTimeFromString("2022-08-23T21:35:10.953Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
