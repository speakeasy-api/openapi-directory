# TypeAny

## Overview

Search API for 'Any file type' entry type

### Available Operations

* [SearchAny](#searchany) - Search API for 'Any file type' entry type

## SearchAny

API to search for entries of type Any file type

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
    res, err := s.TypeAny.SearchAny(ctx, operations.SearchAnyRequest{
        ChangedateFrom: types.MustTimeFromString("2021-08-13T16:19:19.906Z"),
        ChangedateTo: types.MustTimeFromString("2021-06-10T05:07:43.614Z"),
        CreatedateFrom: types.MustTimeFromString("2022-10-06T15:49:54.663Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-20T20:35:01.256Z"),
        Description: sdk.String("occaecati"),
        Filesuffix: sdk.String("fugit"),
        Fromdate: types.MustTimeFromString("2021-02-10T09:24:01.909Z"),
        Group: sdk.String("optio"),
        Max: sdk.Int64(521848),
        Maxlatitude: sdk.Float32(1059.07),
        Maxlongitude: sdk.Float32(4146.62),
        Minlatitude: sdk.Float32(4736),
        Minlongitude: sdk.Float32(2645.55),
        Name: sdk.String("Krista Rippin"),
        Skip: sdk.Int64(568434),
        Text: sdk.String("aspernatur"),
        Todate: types.MustTimeFromString("2022-09-04T16:31:28.618Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
