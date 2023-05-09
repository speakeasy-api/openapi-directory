# TypeNotesNotebook

## Overview

Search API for 'Notebook' entry type

### Available Operations

* [SearchNotesNotebook](#searchnotesnotebook) - Search API for 'Notebook' entry type

## SearchNotesNotebook

API to search for entries of type Notebook

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
    res, err := s.TypeNotesNotebook.SearchNotesNotebook(ctx, operations.SearchNotesNotebookRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-27T00:31:59.035Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-15T07:00:59.329Z"),
        CreatedateFrom: types.MustTimeFromString("2022-01-31T05:44:55.505Z"),
        CreatedateTo: types.MustTimeFromString("2022-10-30T23:22:09.432Z"),
        Description: sdk.String("rerum"),
        Filesuffix: sdk.String("doloremque"),
        Fromdate: types.MustTimeFromString("2022-07-27T23:55:27.293Z"),
        Group: sdk.String("at"),
        Max: sdk.Int64(431253),
        Maxlatitude: sdk.Float32(4444.79),
        Maxlongitude: sdk.Float32(5311.95),
        Minlatitude: sdk.Float32(5023.93),
        Minlongitude: sdk.Float32(4706.47),
        Name: sdk.String("Rickey Oberbrunner"),
        Skip: sdk.Int64(542340),
        Text: sdk.String("architecto"),
        Todate: types.MustTimeFromString("2022-05-13T14:00:02.845Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
