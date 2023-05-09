# TypeTypeEsriRestfolder

## Overview

Search API for 'ESRI Services Folder' entry type

### Available Operations

* [SearchTypeEsriRestfolder](#searchtypeesrirestfolder) - Search API for 'ESRI Services Folder' entry type

## SearchTypeEsriRestfolder

API to search for entries of type ESRI Services Folder

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
    res, err := s.TypeTypeEsriRestfolder.SearchTypeEsriRestfolder(ctx, operations.SearchTypeEsriRestfolderRequest{
        ChangedateFrom: types.MustTimeFromString("2021-01-17T10:42:22.968Z"),
        ChangedateTo: types.MustTimeFromString("2021-12-05T03:14:49.946Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-17T20:31:22.684Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-10T08:34:13.727Z"),
        Description: sdk.String("excepturi"),
        Filesuffix: sdk.String("odio"),
        Fromdate: types.MustTimeFromString("2021-03-24T04:22:11.526Z"),
        Group: sdk.String("delectus"),
        Max: sdk.Int64(169229),
        Maxlatitude: sdk.Float32(232.36),
        Maxlongitude: sdk.Float32(2432.47),
        Minlatitude: sdk.Float32(5311.04),
        Minlongitude: sdk.Float32(4716.42),
        Name: sdk.String("Nicole Becker"),
        Skip: sdk.Int64(15563),
        Text: sdk.String("impedit"),
        Todate: types.MustTimeFromString("2020-09-04T12:32:09.161Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
