# TypeTypePointIcebridgeAtmQfit

## Overview

Search API for 'ATM QFIT Data' entry type

### Available Operations

* [SearchTypePointIcebridgeAtmQfit](#searchtypepointicebridgeatmqfit) - Search API for 'ATM QFIT Data' entry type

## SearchTypePointIcebridgeAtmQfit

API to search for entries of type ATM QFIT Data

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
    res, err := s.TypeTypePointIcebridgeAtmQfit.SearchTypePointIcebridgeAtmQfit(ctx, operations.SearchTypePointIcebridgeAtmQfitRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-13T21:23:51.890Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-21T22:37:08.105Z"),
        CreatedateFrom: types.MustTimeFromString("2020-08-28T05:38:13.948Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-19T04:42:02.526Z"),
        Description: sdk.String("sunt"),
        Filesuffix: sdk.String("quisquam"),
        Fromdate: types.MustTimeFromString("2021-09-02T18:33:54.350Z"),
        Group: sdk.String("ut"),
        Max: sdk.Int64(88210),
        Maxlatitude: sdk.Float32(9702.13),
        Maxlongitude: sdk.Float32(9710.5),
        Minlatitude: sdk.Float32(7174.86),
        Minlongitude: sdk.Float32(9304.68),
        Name: sdk.String("Forrest Powlowski"),
        Skip: sdk.Int64(620520),
        Text: sdk.String("ipsam"),
        Todate: types.MustTimeFromString("2020-03-12T07:11:13.000Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
