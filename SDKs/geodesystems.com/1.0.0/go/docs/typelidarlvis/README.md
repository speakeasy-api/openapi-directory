# TypeLidarLvis

## Overview

Search API for 'LVIS Lidar Data' entry type

### Available Operations

* [SearchLidarLvis](#searchlidarlvis) - Search API for 'LVIS Lidar Data' entry type

## SearchLidarLvis

API to search for entries of type LVIS Lidar Data

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
    res, err := s.TypeLidarLvis.SearchLidarLvis(ctx, operations.SearchLidarLvisRequest{
        ChangedateFrom: types.MustTimeFromString("2021-09-24T18:07:45.123Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-28T02:31:04.579Z"),
        CreatedateFrom: types.MustTimeFromString("2021-11-24T14:44:53.995Z"),
        CreatedateTo: types.MustTimeFromString("2020-11-17T23:24:31.493Z"),
        Description: sdk.String("non"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2020-03-20T20:47:10.956Z"),
        Group: sdk.String("distinctio"),
        Max: sdk.Int64(866861),
        Maxlatitude: sdk.Float32(3233.65),
        Maxlongitude: sdk.Float32(8161.51),
        Minlatitude: sdk.Float32(6746.83),
        Minlongitude: sdk.Float32(9114.51),
        Name: sdk.String("Randall Schmitt III"),
        Skip: sdk.Int64(647210),
        Text: sdk.String("molestias"),
        Todate: types.MustTimeFromString("2021-08-31T04:48:59.619Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
