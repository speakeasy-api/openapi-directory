# TypeTypeEsriGeometryserver

## Overview

Search API for 'ESRI Geometry Server' entry type

### Available Operations

* [SearchTypeEsriGeometryserver](#searchtypeesrigeometryserver) - Search API for 'ESRI Geometry Server' entry type

## SearchTypeEsriGeometryserver

API to search for entries of type ESRI Geometry Server

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
    res, err := s.TypeTypeEsriGeometryserver.SearchTypeEsriGeometryserver(ctx, operations.SearchTypeEsriGeometryserverRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-07T09:20:33.609Z"),
        ChangedateTo: types.MustTimeFromString("2021-12-27T19:43:15.619Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-23T13:19:03.770Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-04T10:52:35.870Z"),
        Description: sdk.String("architecto"),
        Filesuffix: sdk.String("sint"),
        Fromdate: types.MustTimeFromString("2020-10-20T13:37:06.781Z"),
        Group: sdk.String("asperiores"),
        Max: sdk.Int64(98250),
        Maxlatitude: sdk.Float32(1597.29),
        Maxlongitude: sdk.Float32(3661.17),
        Minlatitude: sdk.Float32(7519.01),
        Minlongitude: sdk.Float32(8926.4),
        Name: sdk.String("Christine Harber"),
        Skip: sdk.Int64(625418),
        Text: sdk.String("expedita"),
        Todate: types.MustTimeFromString("2021-05-18T04:27:16.690Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
