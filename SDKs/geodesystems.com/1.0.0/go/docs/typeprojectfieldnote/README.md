# TypeProjectFieldnote

## Overview

Search API for 'Field Note' entry type

### Available Operations

* [SearchProjectFieldnote](#searchprojectfieldnote) - Search API for 'Field Note' entry type

## SearchProjectFieldnote

API to search for entries of type Field Note

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
    res, err := s.TypeProjectFieldnote.SearchProjectFieldnote(ctx, operations.SearchProjectFieldnoteRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-27T08:01:11.900Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-01T20:30:54.862Z"),
        CreatedateFrom: types.MustTimeFromString("2020-01-23T04:32:45.729Z"),
        CreatedateTo: types.MustTimeFromString("2021-09-27T00:30:18.295Z"),
        Description: sdk.String("nesciunt"),
        Filesuffix: sdk.String("cupiditate"),
        Fromdate: types.MustTimeFromString("2021-10-26T10:41:06.484Z"),
        Group: sdk.String("beatae"),
        Max: sdk.Int64(56998),
        Maxlatitude: sdk.Float32(6509.14),
        Maxlongitude: sdk.Float32(7211.38),
        Minlatitude: sdk.Float32(8273.14),
        Minlongitude: sdk.Float32(7764.21),
        Name: sdk.String("Garry Johnson"),
        Skip: sdk.Int64(453880),
        Text: sdk.String("nisi"),
        Todate: types.MustTimeFromString("2022-05-30T18:07:27.744Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
