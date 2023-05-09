# TypeTypeGtfsRoute

## Overview

Search API for 'Transit Route' entry type

### Available Operations

* [SearchTypeGtfsRoute](#searchtypegtfsroute) - Search API for 'Transit Route' entry type

## SearchTypeGtfsRoute

API to search for entries of type Transit Route

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
    res, err := s.TypeTypeGtfsRoute.SearchTypeGtfsRoute(ctx, operations.SearchTypeGtfsRouteRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-19T15:30:32.385Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-11T14:51:38.024Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-23T01:50:15.716Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-04T07:21:12.859Z"),
        Description: sdk.String("modi"),
        Filesuffix: sdk.String("illum"),
        Fromdate: types.MustTimeFromString("2022-07-13T00:51:44.607Z"),
        Group: sdk.String("reprehenderit"),
        Max: sdk.Int64(758184),
        Maxlatitude: sdk.Float32(7363.13),
        Maxlongitude: sdk.Float32(6338.25),
        Minlatitude: sdk.Float32(6370.37),
        Minlongitude: sdk.Float32(9551.26),
        Name: sdk.String("Monica Hane"),
        SearchTypeGtfsRouteRouteID: sdk.String("quaerat"),
        SearchTypeGtfsRouteStopNames: sdk.String("voluptatum"),
        Skip: sdk.Int64(257959),
        Text: sdk.String("explicabo"),
        Todate: types.MustTimeFromString("2021-03-29T12:54:59.051Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
