# TypeTypePointOceanCnv

## Overview

Search API for 'SeaBird CNV Data' entry type

### Available Operations

* [SearchTypePointOceanCnv](#searchtypepointoceancnv) - Search API for 'SeaBird CNV Data' entry type

## SearchTypePointOceanCnv

API to search for entries of type SeaBird CNV Data

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
    res, err := s.TypeTypePointOceanCnv.SearchTypePointOceanCnv(ctx, operations.SearchTypePointOceanCnvRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-17T22:59:09.800Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-31T07:53:06.376Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-31T06:16:27.327Z"),
        CreatedateTo: types.MustTimeFromString("2020-03-10T04:07:17.266Z"),
        Description: sdk.String("suscipit"),
        Filesuffix: sdk.String("assumenda"),
        Fromdate: types.MustTimeFromString("2022-03-21T14:25:08.203Z"),
        Group: sdk.String("suscipit"),
        Max: sdk.Int64(837590),
        Maxlatitude: sdk.Float32(4245.1),
        Maxlongitude: sdk.Float32(9301.05),
        Minlatitude: sdk.Float32(8616.38),
        Minlongitude: sdk.Float32(5662.13),
        Name: sdk.String("Arnold Dooley"),
        Skip: sdk.Int64(433798),
        Text: sdk.String("non"),
        Todate: types.MustTimeFromString("2022-08-29T04:39:24.132Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
