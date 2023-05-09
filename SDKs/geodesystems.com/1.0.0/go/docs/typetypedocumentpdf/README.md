# TypeTypeDocumentPdf

## Overview

Search API for 'PDF File' entry type

### Available Operations

* [SearchTypeDocumentPdf](#searchtypedocumentpdf) - Search API for 'PDF File' entry type

## SearchTypeDocumentPdf

API to search for entries of type PDF File

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
    res, err := s.TypeTypeDocumentPdf.SearchTypeDocumentPdf(ctx, operations.SearchTypeDocumentPdfRequest{
        ChangedateFrom: types.MustTimeFromString("2021-06-02T05:43:50.216Z"),
        ChangedateTo: types.MustTimeFromString("2022-05-18T06:55:38.525Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-24T11:49:51.417Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-24T06:32:15.469Z"),
        Description: sdk.String("voluptates"),
        Filesuffix: sdk.String("delectus"),
        Fromdate: types.MustTimeFromString("2022-01-14T20:40:34.498Z"),
        Group: sdk.String("exercitationem"),
        Max: sdk.Int64(217552),
        Maxlatitude: sdk.Float32(3851.65),
        Maxlongitude: sdk.Float32(413.46),
        Minlatitude: sdk.Float32(1533.7),
        Minlongitude: sdk.Float32(5301.99),
        Name: sdk.String("Darnell Watsica"),
        Skip: sdk.Int64(584663),
        Text: sdk.String("adipisci"),
        Todate: types.MustTimeFromString("2022-12-05T19:27:10.992Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
