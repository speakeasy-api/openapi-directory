# TypePropertydb

## Overview

Search API for 'Property Database' entry type

### Available Operations

* [SearchPropertydb](#searchpropertydb) - Search API for 'Property Database' entry type

## SearchPropertydb

API to search for entries of type Property Database

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
    res, err := s.TypePropertydb.SearchPropertydb(ctx, operations.SearchPropertydbRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-02T14:38:11.345Z"),
        ChangedateTo: types.MustTimeFromString("2020-08-16T15:28:22.285Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-18T13:21:09.532Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-20T07:29:54.943Z"),
        Description: sdk.String("veritatis"),
        Filesuffix: sdk.String("facere"),
        Fromdate: types.MustTimeFromString("2020-12-25T20:40:11.724Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(32737),
        Maxlatitude: sdk.Float32(1409.09),
        Maxlongitude: sdk.Float32(3988.47),
        Minlatitude: sdk.Float32(8626.66),
        Minlongitude: sdk.Float32(3184.5),
        Name: sdk.String("Julie O'Reilly"),
        SearchDbPropertydbAddress: sdk.String("vitae"),
        SearchDbPropertydbBuildingType: sdk.String("omnis"),
        SearchDbPropertydbCity: sdk.String("alias"),
        SearchDbPropertydbHouseSize: sdk.Int64(957489),
        SearchDbPropertydbLocation: sdk.String("officiis"),
        SearchDbPropertydbLotAcres: sdk.Float64(7088.83),
        SearchDbPropertydbLotSqft: sdk.Int64(156843),
        SearchDbPropertydbOwner: sdk.String("vitae"),
        SearchDbPropertydbPriceSqft: sdk.Float64(4878.39),
        SearchDbPropertydbPropertyID: sdk.String("quas"),
        SearchDbPropertydbState: sdk.String("ipsa"),
        SearchDbPropertydbValue: sdk.Int64(718187),
        Skip: sdk.Int64(811903),
        Text: sdk.String("quod"),
        Todate: types.MustTimeFromString("2022-12-03T04:16:30.672Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
