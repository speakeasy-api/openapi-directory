# TypeTypeDocumentXls

## Overview

Search API for 'Excel File' entry type

### Available Operations

* [SearchTypeDocumentXls](#searchtypedocumentxls) - Search API for 'Excel File' entry type

## SearchTypeDocumentXls

API to search for entries of type Excel File

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
    res, err := s.TypeTypeDocumentXls.SearchTypeDocumentXls(ctx, operations.SearchTypeDocumentXlsRequest{
        ChangedateFrom: types.MustTimeFromString("2020-08-03T09:21:22.769Z"),
        ChangedateTo: types.MustTimeFromString("2021-11-05T00:07:21.775Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-15T12:49:09.774Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-19T03:24:19.827Z"),
        Description: sdk.String("repellat"),
        Filesuffix: sdk.String("cupiditate"),
        Fromdate: types.MustTimeFromString("2021-07-14T17:52:57.722Z"),
        Group: sdk.String("culpa"),
        Max: sdk.Int64(855647),
        Maxlatitude: sdk.Float32(780.74),
        Maxlongitude: sdk.Float32(5417.43),
        Minlatitude: sdk.Float32(3232.15),
        Minlongitude: sdk.Float32(9594.2),
        Name: sdk.String("Dr. Alexander Douglas"),
        Skip: sdk.Int64(696324),
        Text: sdk.String("delectus"),
        Todate: types.MustTimeFromString("2022-03-28T03:56:37.209Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
