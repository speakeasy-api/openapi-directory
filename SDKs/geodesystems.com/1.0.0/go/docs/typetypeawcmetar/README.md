# TypeTypeAwcMetar

## Overview

Search API for 'AWC Weather Observations' entry type

### Available Operations

* [SearchTypeAwcMetar](#searchtypeawcmetar) - Search API for 'AWC Weather Observations' entry type

## SearchTypeAwcMetar

API to search for entries of type AWC Weather Observations

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
    res, err := s.TypeTypeAwcMetar.SearchTypeAwcMetar(ctx, operations.SearchTypeAwcMetarRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-23T05:13:17.017Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-12T15:02:04.341Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-06T17:14:37.803Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-12T23:49:14.405Z"),
        Description: sdk.String("at"),
        Filesuffix: sdk.String("illum"),
        Fromdate: types.MustTimeFromString("2021-11-07T06:10:09.611Z"),
        Group: sdk.String("exercitationem"),
        Max: sdk.Int64(739938),
        Maxlatitude: sdk.Float32(5327.21),
        Maxlongitude: sdk.Float32(7046.65),
        Minlatitude: sdk.Float32(8092.12),
        Minlongitude: sdk.Float32(9682.12),
        Name: sdk.String("Eleanor Streich"),
        SearchTypeAwcMetarSiteID: sdk.String("nemo"),
        Skip: sdk.Int64(615532),
        Text: sdk.String("nisi"),
        Todate: types.MustTimeFromString("2022-07-16T15:58:54.382Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
