# TypeMapGooglemap

## Overview

Search API for 'Google Map URL' entry type

### Available Operations

* [SearchMapGooglemap](#searchmapgooglemap) - Search API for 'Google Map URL' entry type

## SearchMapGooglemap

API to search for entries of type Google Map URL

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
    res, err := s.TypeMapGooglemap.SearchMapGooglemap(ctx, operations.SearchMapGooglemapRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-15T10:08:44.059Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-16T03:46:30.247Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-10T02:09:22.586Z"),
        CreatedateTo: types.MustTimeFromString("2021-03-04T13:22:29.959Z"),
        Description: sdk.String("sed"),
        Filesuffix: sdk.String("nesciunt"),
        Fromdate: types.MustTimeFromString("2021-12-27T01:32:30.329Z"),
        Group: sdk.String("cupiditate"),
        Max: sdk.Int64(303253),
        Maxlatitude: sdk.Float32(5692.87),
        Maxlongitude: sdk.Float32(9804.1),
        Minlatitude: sdk.Float32(5120.81),
        Minlongitude: sdk.Float32(2439.04),
        Name: sdk.String("Miss Vincent Hickle"),
        Skip: sdk.Int64(555294),
        Text: sdk.String("molestiae"),
        Todate: types.MustTimeFromString("2022-01-05T00:04:42.693Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
