# TypeTypeDocumentDoc

## Overview

Search API for 'Word File' entry type

### Available Operations

* [SearchTypeDocumentDoc](#searchtypedocumentdoc) - Search API for 'Word File' entry type

## SearchTypeDocumentDoc

API to search for entries of type Word File

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
    res, err := s.TypeTypeDocumentDoc.SearchTypeDocumentDoc(ctx, operations.SearchTypeDocumentDocRequest{
        ChangedateFrom: types.MustTimeFromString("2022-01-12T21:34:14.646Z"),
        ChangedateTo: types.MustTimeFromString("2020-02-13T00:59:27.963Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-08T16:14:41.942Z"),
        CreatedateTo: types.MustTimeFromString("2021-06-26T00:44:17.067Z"),
        Description: sdk.String("neque"),
        Filesuffix: sdk.String("quam"),
        Fromdate: types.MustTimeFromString("2021-03-22T00:34:03.284Z"),
        Group: sdk.String("voluptatum"),
        Max: sdk.Int64(28256),
        Maxlatitude: sdk.Float32(7892.86),
        Maxlongitude: sdk.Float32(1138.08),
        Minlatitude: sdk.Float32(7664.98),
        Minlongitude: sdk.Float32(1020.71),
        Name: sdk.String("Guillermo McClure"),
        Skip: sdk.Int64(637969),
        Text: sdk.String("iste"),
        Todate: types.MustTimeFromString("2021-11-18T22:27:59.069Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
