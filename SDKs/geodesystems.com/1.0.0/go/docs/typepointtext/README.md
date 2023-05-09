# TypePointText

## Overview

Search API for 'Text Point Data' entry type

### Available Operations

* [SearchPointText](#searchpointtext) - Search API for 'Text Point Data' entry type

## SearchPointText

API to search for entries of type Text Point Data

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
    res, err := s.TypePointText.SearchPointText(ctx, operations.SearchPointTextRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-11T23:53:23.627Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-18T08:16:52.982Z"),
        CreatedateFrom: types.MustTimeFromString("2022-05-30T16:08:07.597Z"),
        CreatedateTo: types.MustTimeFromString("2022-12-22T06:00:09.505Z"),
        Description: sdk.String("esse"),
        Filesuffix: sdk.String("debitis"),
        Fromdate: types.MustTimeFromString("2020-08-20T00:40:38.007Z"),
        Group: sdk.String("cumque"),
        Max: sdk.Int64(302878),
        Maxlatitude: sdk.Float32(6778.95),
        Maxlongitude: sdk.Float32(6448.27),
        Minlatitude: sdk.Float32(3198.34),
        Minlongitude: sdk.Float32(9704.11),
        Name: sdk.String("Francis Osinski"),
        Skip: sdk.Int64(607624),
        Text: sdk.String("aut"),
        Todate: types.MustTimeFromString("2022-05-11T09:02:32.338Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
