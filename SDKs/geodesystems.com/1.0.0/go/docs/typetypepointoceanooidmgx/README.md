# TypeTypePointOceanOoiDmgx

## Overview

Search API for 'OOI Data' entry type

### Available Operations

* [SearchTypePointOceanOoiDmgx](#searchtypepointoceanooidmgx) - Search API for 'OOI Data' entry type

## SearchTypePointOceanOoiDmgx

API to search for entries of type OOI Data

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
    res, err := s.TypeTypePointOceanOoiDmgx.SearchTypePointOceanOoiDmgx(ctx, operations.SearchTypePointOceanOoiDmgxRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-09T06:42:37.007Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-24T07:52:55.534Z"),
        CreatedateFrom: types.MustTimeFromString("2022-08-03T06:33:14.026Z"),
        CreatedateTo: types.MustTimeFromString("2020-11-19T04:05:25.599Z"),
        Description: sdk.String("temporibus"),
        Filesuffix: sdk.String("error"),
        Fromdate: types.MustTimeFromString("2022-01-13T19:37:58.646Z"),
        Group: sdk.String("molestiae"),
        Max: sdk.Int64(646456),
        Maxlatitude: sdk.Float32(6756.77),
        Maxlongitude: sdk.Float32(1413.14),
        Minlatitude: sdk.Float32(6980.88),
        Minlongitude: sdk.Float32(1612.18),
        Name: sdk.String("Frances Bosco"),
        Skip: sdk.Int64(597951),
        Text: sdk.String("nostrum"),
        Todate: types.MustTimeFromString("2022-09-24T20:51:26.798Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
