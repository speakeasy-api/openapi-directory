# TypeLocalfiles

## Overview

Search API for 'Server Side Files' entry type

### Available Operations

* [SearchLocalfiles](#searchlocalfiles) - Search API for 'Server Side Files' entry type

## SearchLocalfiles

API to search for entries of type Server Side Files

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
    res, err := s.TypeLocalfiles.SearchLocalfiles(ctx, operations.SearchLocalfilesRequest{
        ChangedateFrom: types.MustTimeFromString("2022-12-20T11:24:22.596Z"),
        ChangedateTo: types.MustTimeFromString("2020-04-19T09:30:43.417Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-21T17:37:11.705Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-24T15:03:49.689Z"),
        Description: sdk.String("similique"),
        Filesuffix: sdk.String("porro"),
        Fromdate: types.MustTimeFromString("2022-11-17T13:10:04.528Z"),
        Group: sdk.String("magni"),
        Max: sdk.Int64(885797),
        Maxlatitude: sdk.Float32(1483.79),
        Maxlongitude: sdk.Float32(8981.11),
        Minlatitude: sdk.Float32(7732.59),
        Minlongitude: sdk.Float32(559.81),
        Name: sdk.String("Darnell Wunsch"),
        Skip: sdk.Int64(691),
        Text: sdk.String("asperiores"),
        Todate: types.MustTimeFromString("2022-10-06T09:51:21.294Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
