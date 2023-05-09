# TypeTypePointHydroWaterml

## Overview

Search API for 'WaterML' entry type

### Available Operations

* [SearchTypePointHydroWaterml](#searchtypepointhydrowaterml) - Search API for 'WaterML' entry type

## SearchTypePointHydroWaterml

API to search for entries of type WaterML

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
    res, err := s.TypeTypePointHydroWaterml.SearchTypePointHydroWaterml(ctx, operations.SearchTypePointHydroWatermlRequest{
        ChangedateFrom: types.MustTimeFromString("2020-11-20T16:02:49.007Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-19T12:36:59.311Z"),
        CreatedateFrom: types.MustTimeFromString("2020-11-27T16:31:45.176Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-10T08:29:20.302Z"),
        Description: sdk.String("distinctio"),
        Filesuffix: sdk.String("blanditiis"),
        Fromdate: types.MustTimeFromString("2022-11-11T00:09:42.792Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(603512),
        Maxlatitude: sdk.Float32(3654.73),
        Maxlongitude: sdk.Float32(2134.05),
        Minlatitude: sdk.Float32(6979.15),
        Minlongitude: sdk.Float32(2828.25),
        Name: sdk.String("Melody Stoltenberg"),
        SearchTypePointHydroWatermlSiteCode: sdk.String("labore"),
        SearchTypePointHydroWatermlSiteName: sdk.String("sequi"),
        Skip: sdk.Int64(86885),
        Text: sdk.String("veniam"),
        Todate: types.MustTimeFromString("2021-05-08T12:41:52.891Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
