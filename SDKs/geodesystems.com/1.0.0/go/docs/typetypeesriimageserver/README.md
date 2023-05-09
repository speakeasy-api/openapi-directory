# TypeTypeEsriImageserver

## Overview

Search API for 'ESRI Image Server' entry type

### Available Operations

* [SearchTypeEsriImageserver](#searchtypeesriimageserver) - Search API for 'ESRI Image Server' entry type

## SearchTypeEsriImageserver

API to search for entries of type ESRI Image Server

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
    res, err := s.TypeTypeEsriImageserver.SearchTypeEsriImageserver(ctx, operations.SearchTypeEsriImageserverRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-20T19:12:46.314Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-27T07:03:16.483Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-15T15:00:49.838Z"),
        CreatedateTo: types.MustTimeFromString("2020-09-02T21:57:03.450Z"),
        Description: sdk.String("repudiandae"),
        Filesuffix: sdk.String("tempora"),
        Fromdate: types.MustTimeFromString("2022-03-29T04:11:17.016Z"),
        Group: sdk.String("illum"),
        Max: sdk.Int64(478576),
        Maxlatitude: sdk.Float32(4010.83),
        Maxlongitude: sdk.Float32(5751.11),
        Minlatitude: sdk.Float32(4001.45),
        Minlongitude: sdk.Float32(9961.01),
        Name: sdk.String("Glenn Rosenbaum"),
        Skip: sdk.Int64(262891),
        Text: sdk.String("dignissimos"),
        Todate: types.MustTimeFromString("2022-12-25T22:39:52.866Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
