# TypeTypeSoundingCod

## Overview

Search API for 'COD Sounding' entry type

### Available Operations

* [SearchTypeSoundingCod](#searchtypesoundingcod) - Search API for 'COD Sounding' entry type

## SearchTypeSoundingCod

API to search for entries of type COD Sounding

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
    res, err := s.TypeTypeSoundingCod.SearchTypeSoundingCod(ctx, operations.SearchTypeSoundingCodRequest{
        ChangedateFrom: types.MustTimeFromString("2021-06-20T14:42:56.584Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-15T12:37:10.194Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-06T10:34:05.102Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-14T00:18:21.167Z"),
        Description: sdk.String("ducimus"),
        Filesuffix: sdk.String("nisi"),
        Fromdate: types.MustTimeFromString("2020-05-07T02:41:22.401Z"),
        Group: sdk.String("necessitatibus"),
        Max: sdk.Int64(720552),
        Maxlatitude: sdk.Float32(3673.5),
        Maxlongitude: sdk.Float32(841.54),
        Minlatitude: sdk.Float32(5623.39),
        Minlongitude: sdk.Float32(7721.25),
        Name: sdk.String("Dr. Elena Murazik"),
        Skip: sdk.Int64(832589),
        Text: sdk.String("dolor"),
        Todate: types.MustTimeFromString("2022-08-31T14:19:07.244Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
