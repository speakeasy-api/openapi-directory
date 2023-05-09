# TypeTypeImageAirport

## Overview

Search API for 'Airport Image' entry type

### Available Operations

* [SearchTypeImageAirport](#searchtypeimageairport) - Search API for 'Airport Image' entry type

## SearchTypeImageAirport

API to search for entries of type Airport Image

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
    res, err := s.TypeTypeImageAirport.SearchTypeImageAirport(ctx, operations.SearchTypeImageAirportRequest{
        ChangedateFrom: types.MustTimeFromString("2020-04-04T17:35:50.016Z"),
        ChangedateTo: types.MustTimeFromString("2022-03-10T01:01:28.057Z"),
        CreatedateFrom: types.MustTimeFromString("2021-07-03T23:45:27.582Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-30T04:54:36.719Z"),
        Description: sdk.String("voluptate"),
        Filesuffix: sdk.String("tempore"),
        Fromdate: types.MustTimeFromString("2022-02-26T01:18:24.315Z"),
        Group: sdk.String("mollitia"),
        Max: sdk.Int64(58176),
        Maxlatitude: sdk.Float32(5502.16),
        Maxlongitude: sdk.Float32(7748.04),
        Minlatitude: sdk.Float32(3538.06),
        Minlongitude: sdk.Float32(4475.03),
        Name: sdk.String("Alfonso Keeling"),
        Skip: sdk.Int64(539502),
        Text: sdk.String("similique"),
        Todate: types.MustTimeFromString("2022-11-25T19:21:08.744Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
