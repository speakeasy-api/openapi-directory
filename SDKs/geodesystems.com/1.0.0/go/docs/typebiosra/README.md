# TypeBioSra

## Overview

Search API for 'Sequence Read Archive' entry type

### Available Operations

* [SearchBioSra](#searchbiosra) - Search API for 'Sequence Read Archive' entry type

## SearchBioSra

API to search for entries of type Sequence Read Archive

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
    res, err := s.TypeBioSra.SearchBioSra(ctx, operations.SearchBioSraRequest{
        ChangedateFrom: types.MustTimeFromString("2021-10-31T07:58:44.750Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-14T21:26:14.171Z"),
        CreatedateFrom: types.MustTimeFromString("2022-09-16T08:47:14.764Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-05T02:20:22.923Z"),
        Description: sdk.String("dolorum"),
        Filesuffix: sdk.String("architecto"),
        Fromdate: types.MustTimeFromString("2022-12-26T00:04:34.165Z"),
        Group: sdk.String("quas"),
        Max: sdk.Int64(929530),
        Maxlatitude: sdk.Float32(92.4),
        Maxlongitude: sdk.Float32(6699.17),
        Minlatitude: sdk.Float32(8330.38),
        Minlongitude: sdk.Float32(7851.53),
        Name: sdk.String("Alexander Prosacco"),
        Skip: sdk.Int64(63955),
        Text: sdk.String("laudantium"),
        Todate: types.MustTimeFromString("2022-06-03T03:16:58.870Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
