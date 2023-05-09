# TypeTypeNasaames

## Overview

Search API for 'NASA AMES File' entry type

### Available Operations

* [SearchTypeNasaames](#searchtypenasaames) - Search API for 'NASA AMES File' entry type

## SearchTypeNasaames

API to search for entries of type NASA AMES File

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
    res, err := s.TypeTypeNasaames.SearchTypeNasaames(ctx, operations.SearchTypeNasaamesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-06T04:50:31.611Z"),
        ChangedateTo: types.MustTimeFromString("2022-08-24T06:24:18.561Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-15T07:16:53.819Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-23T16:27:54.446Z"),
        Description: sdk.String("reiciendis"),
        Filesuffix: sdk.String("qui"),
        Fromdate: types.MustTimeFromString("2021-06-27T13:27:59.360Z"),
        Group: sdk.String("numquam"),
        Max: sdk.Int64(78996),
        Maxlatitude: sdk.Float32(8997.47),
        Maxlongitude: sdk.Float32(9464.16),
        Minlatitude: sdk.Float32(3495.58),
        Minlongitude: sdk.Float32(4682.21),
        Name: sdk.String("Mr. Erica Wuckert"),
        Skip: sdk.Int64(572996),
        Text: sdk.String("id"),
        Todate: types.MustTimeFromString("2022-09-19T12:52:26.784Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
