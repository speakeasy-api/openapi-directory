# TypeTypeDocumentCsv

## Overview

Search API for 'CSV File' entry type

### Available Operations

* [SearchTypeDocumentCsv](#searchtypedocumentcsv) - Search API for 'CSV File' entry type

## SearchTypeDocumentCsv

API to search for entries of type CSV File

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
    res, err := s.TypeTypeDocumentCsv.SearchTypeDocumentCsv(ctx, operations.SearchTypeDocumentCsvRequest{
        ChangedateFrom: types.MustTimeFromString("2021-08-07T18:51:34.254Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-14T06:09:57.887Z"),
        CreatedateFrom: types.MustTimeFromString("2020-02-21T12:31:55.446Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-09T12:17:17.081Z"),
        Description: sdk.String("excepturi"),
        Filesuffix: sdk.String("aliquid"),
        Fromdate: types.MustTimeFromString("2022-12-21T03:02:36.046Z"),
        Group: sdk.String("illum"),
        Max: sdk.Int64(388006),
        Maxlatitude: sdk.Float32(6328.5),
        Maxlongitude: sdk.Float32(1167.05),
        Minlatitude: sdk.Float32(5388.77),
        Minlongitude: sdk.Float32(1914.25),
        Name: sdk.String("Rosalie Lindgren"),
        Skip: sdk.Int64(837739),
        Text: sdk.String("a"),
        Todate: types.MustTimeFromString("2022-06-01T10:57:10.907Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
