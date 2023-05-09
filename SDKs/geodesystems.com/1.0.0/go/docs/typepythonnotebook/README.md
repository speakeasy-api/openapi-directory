# TypePythonNotebook

## Overview

Search API for 'IPython Notebook file' entry type

### Available Operations

* [SearchPythonNotebook](#searchpythonnotebook) - Search API for 'IPython Notebook file' entry type

## SearchPythonNotebook

API to search for entries of type IPython Notebook file

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
    res, err := s.TypePythonNotebook.SearchPythonNotebook(ctx, operations.SearchPythonNotebookRequest{
        ChangedateFrom: types.MustTimeFromString("2020-11-04T19:51:43.586Z"),
        ChangedateTo: types.MustTimeFromString("2021-05-08T06:04:19.379Z"),
        CreatedateFrom: types.MustTimeFromString("2020-10-05T05:12:26.595Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-27T23:49:16.699Z"),
        Description: sdk.String("tempora"),
        Filesuffix: sdk.String("esse"),
        Fromdate: types.MustTimeFromString("2022-06-14T11:05:35.136Z"),
        Group: sdk.String("reiciendis"),
        Max: sdk.Int64(704644),
        Maxlatitude: sdk.Float32(3060.23),
        Maxlongitude: sdk.Float32(9229.15),
        Minlatitude: sdk.Float32(2274.24),
        Minlongitude: sdk.Float32(6170.35),
        Name: sdk.String("Gretchen Keeling"),
        Skip: sdk.Int64(68336),
        Text: sdk.String("ad"),
        Todate: types.MustTimeFromString("2021-06-10T07:55:03.152Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
