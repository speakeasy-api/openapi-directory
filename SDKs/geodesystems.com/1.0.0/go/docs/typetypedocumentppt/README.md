# TypeTypeDocumentPpt

## Overview

Search API for 'Powerpoint File' entry type

### Available Operations

* [SearchTypeDocumentPpt](#searchtypedocumentppt) - Search API for 'Powerpoint File' entry type

## SearchTypeDocumentPpt

API to search for entries of type Powerpoint File

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
    res, err := s.TypeTypeDocumentPpt.SearchTypeDocumentPpt(ctx, operations.SearchTypeDocumentPptRequest{
        ChangedateFrom: types.MustTimeFromString("2022-11-07T20:14:50.258Z"),
        ChangedateTo: types.MustTimeFromString("2020-07-16T03:39:02.629Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-26T16:01:08.638Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-24T02:19:57.449Z"),
        Description: sdk.String("non"),
        Filesuffix: sdk.String("delectus"),
        Fromdate: types.MustTimeFromString("2022-03-16T02:42:14.341Z"),
        Group: sdk.String("sunt"),
        Max: sdk.Int64(353493),
        Maxlatitude: sdk.Float32(4630.44),
        Maxlongitude: sdk.Float32(8509.53),
        Minlatitude: sdk.Float32(9160.51),
        Minlongitude: sdk.Float32(6410.06),
        Name: sdk.String("Arnold Bins DVM"),
        Skip: sdk.Int64(276247),
        Text: sdk.String("dolore"),
        Todate: types.MustTimeFromString("2022-05-01T13:28:23.519Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
