# TypeTypeEsriRestservice

## Overview

Search API for 'ESRI Rest Service' entry type

### Available Operations

* [SearchTypeEsriRestservice](#searchtypeesrirestservice) - Search API for 'ESRI Rest Service' entry type

## SearchTypeEsriRestservice

API to search for entries of type ESRI Rest Service

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
    res, err := s.TypeTypeEsriRestservice.SearchTypeEsriRestservice(ctx, operations.SearchTypeEsriRestserviceRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-14T02:49:59.585Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-05T13:27:07.035Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-26T10:15:26.218Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-14T18:29:04.841Z"),
        Description: sdk.String("tenetur"),
        Filesuffix: sdk.String("non"),
        Fromdate: types.MustTimeFromString("2022-06-14T19:22:35.532Z"),
        Group: sdk.String("itaque"),
        Max: sdk.Int64(938015),
        Maxlatitude: sdk.Float32(7738.54),
        Maxlongitude: sdk.Float32(1199.28),
        Minlatitude: sdk.Float32(3588.61),
        Minlongitude: sdk.Float32(7720.62),
        Name: sdk.String("Jonathon Gulgowski"),
        Skip: sdk.Int64(889201),
        Text: sdk.String("quasi"),
        Todate: types.MustTimeFromString("2021-01-11T15:38:38.962Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
