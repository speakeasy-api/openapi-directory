# TypeTypePointNoaaMadis

## Overview

Search API for 'NOAA MADIS Point Data' entry type

### Available Operations

* [SearchTypePointNoaaMadis](#searchtypepointnoaamadis) - Search API for 'NOAA MADIS Point Data' entry type

## SearchTypePointNoaaMadis

API to search for entries of type NOAA MADIS Point Data

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
    res, err := s.TypeTypePointNoaaMadis.SearchTypePointNoaaMadis(ctx, operations.SearchTypePointNoaaMadisRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-22T03:52:56.707Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-21T16:48:27.758Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-10T14:51:37.902Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-10T10:49:51.101Z"),
        Description: sdk.String("laborum"),
        Filesuffix: sdk.String("in"),
        Fromdate: types.MustTimeFromString("2022-11-05T03:19:03.911Z"),
        Group: sdk.String("repellendus"),
        Max: sdk.Int64(504646),
        Maxlatitude: sdk.Float32(2848.32),
        Maxlongitude: sdk.Float32(2590.19),
        Minlatitude: sdk.Float32(5857.3),
        Minlongitude: sdk.Float32(3921.8),
        Name: sdk.String("Garry Schultz"),
        Skip: sdk.Int64(773863),
        Text: sdk.String("reiciendis"),
        Todate: types.MustTimeFromString("2022-04-07T07:32:14.075Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
