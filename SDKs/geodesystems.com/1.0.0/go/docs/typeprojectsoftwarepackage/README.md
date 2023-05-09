# TypeProjectSoftwarepackage

## Overview

Search API for 'Software Tool' entry type

### Available Operations

* [SearchProjectSoftwarepackage](#searchprojectsoftwarepackage) - Search API for 'Software Tool' entry type

## SearchProjectSoftwarepackage

API to search for entries of type Software Tool

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
    res, err := s.TypeProjectSoftwarepackage.SearchProjectSoftwarepackage(ctx, operations.SearchProjectSoftwarepackageRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-18T04:34:13.998Z"),
        ChangedateTo: types.MustTimeFromString("2022-02-28T18:10:48.265Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-13T17:26:24.471Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-07T19:41:24.337Z"),
        Description: sdk.String("eum"),
        Filesuffix: sdk.String("vel"),
        Fromdate: types.MustTimeFromString("2022-06-13T09:57:43.930Z"),
        Group: sdk.String("illo"),
        Max: sdk.Int64(383381),
        Maxlatitude: sdk.Float32(8444.71),
        Maxlongitude: sdk.Float32(8554.84),
        Minlatitude: sdk.Float32(7716.03),
        Minlongitude: sdk.Float32(6329.39),
        Name: sdk.String("Pat Wuckert DVM"),
        SearchProjectSoftwarepackageCapabilities: sdk.String("cumque"),
        SearchProjectSoftwarepackageDomain: sdk.String("expedita"),
        SearchProjectSoftwarepackageLicense: sdk.String("modi"),
        SearchProjectSoftwarepackagePlatform: sdk.String("cumque"),
        SearchProjectSoftwarepackageSoftwareType: sdk.String("ipsam"),
        SearchProjectSoftwarepackageSoftwareUse: sdk.String("occaecati"),
        SearchProjectSoftwarepackageStatus: sdk.String("ipsum"),
        Skip: sdk.Int64(879193),
        Text: sdk.String("quisquam"),
        Todate: types.MustTimeFromString("2022-11-09T08:27:23.346Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
