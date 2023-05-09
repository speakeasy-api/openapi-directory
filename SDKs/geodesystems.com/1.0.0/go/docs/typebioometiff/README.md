# TypeBioOmeTiff

## Overview

Search API for 'OME TIFF File' entry type

### Available Operations

* [SearchBioOmeTiff](#searchbioometiff) - Search API for 'OME TIFF File' entry type

## SearchBioOmeTiff

API to search for entries of type OME TIFF File

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
    res, err := s.TypeBioOmeTiff.SearchBioOmeTiff(ctx, operations.SearchBioOmeTiffRequest{
        ChangedateFrom: types.MustTimeFromString("2022-06-06T23:06:26.119Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-30T07:57:16.138Z"),
        CreatedateFrom: types.MustTimeFromString("2021-11-07T17:49:17.039Z"),
        CreatedateTo: types.MustTimeFromString("2022-05-07T13:57:38.738Z"),
        Description: sdk.String("reiciendis"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2022-07-27T12:46:27.682Z"),
        Group: sdk.String("dolor"),
        Max: sdk.Int64(896547),
        Maxlatitude: sdk.Float32(1412.64),
        Maxlongitude: sdk.Float32(3675.62),
        Minlatitude: sdk.Float32(972.6),
        Minlongitude: sdk.Float32(4358.65),
        Name: sdk.String("Doyle Gibson"),
        Skip: sdk.Int64(703889),
        Text: sdk.String("in"),
        Todate: types.MustTimeFromString("2022-11-25T15:46:28.441Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
