# TypeTypeEsriGpserver

## Overview

Search API for 'ESRI GP Server' entry type

### Available Operations

* [SearchTypeEsriGpserver](#searchtypeesrigpserver) - Search API for 'ESRI GP Server' entry type

## SearchTypeEsriGpserver

API to search for entries of type ESRI GP Server

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
    res, err := s.TypeTypeEsriGpserver.SearchTypeEsriGpserver(ctx, operations.SearchTypeEsriGpserverRequest{
        ChangedateFrom: types.MustTimeFromString("2021-08-21T00:52:09.696Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-07T15:32:11.672Z"),
        CreatedateFrom: types.MustTimeFromString("2022-11-11T12:25:57.456Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-17T17:41:13.405Z"),
        Description: sdk.String("vel"),
        Filesuffix: sdk.String("dolorum"),
        Fromdate: types.MustTimeFromString("2022-01-26T09:43:06.454Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(125154),
        Maxlatitude: sdk.Float32(2264.91),
        Maxlongitude: sdk.Float32(7370.61),
        Minlatitude: sdk.Float32(4811.02),
        Minlongitude: sdk.Float32(5465.4),
        Name: sdk.String("Tamara Terry"),
        Skip: sdk.Int64(607276),
        Text: sdk.String("recusandae"),
        Todate: types.MustTimeFromString("2022-01-10T04:51:48.901Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
