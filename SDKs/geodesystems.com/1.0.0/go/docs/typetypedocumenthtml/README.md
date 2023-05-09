# TypeTypeDocumentHTML

## Overview

Search API for 'HTML File' entry type

### Available Operations

* [SearchTypeDocumentHTML](#searchtypedocumenthtml) - Search API for 'HTML File' entry type

## SearchTypeDocumentHTML

API to search for entries of type HTML File

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
    res, err := s.TypeTypeDocumentHTML.SearchTypeDocumentHTML(ctx, operations.SearchTypeDocumentHTMLRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-03T08:11:18.761Z"),
        ChangedateTo: types.MustTimeFromString("2021-02-01T00:25:41.757Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-23T11:52:33.371Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-09T09:09:47.250Z"),
        Description: sdk.String("sint"),
        Filesuffix: sdk.String("autem"),
        Fromdate: types.MustTimeFromString("2021-10-29T19:31:53.860Z"),
        Group: sdk.String("ab"),
        Max: sdk.Int64(683783),
        Maxlatitude: sdk.Float32(9522.16),
        Maxlongitude: sdk.Float32(2227.71),
        Minlatitude: sdk.Float32(5280.82),
        Minlongitude: sdk.Float32(5618.58),
        Name: sdk.String("Cornelius Beatty"),
        Skip: sdk.Int64(110804),
        Text: sdk.String("numquam"),
        Todate: types.MustTimeFromString("2022-09-25T13:17:27.346Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
