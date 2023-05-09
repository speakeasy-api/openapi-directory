# TypeWeblog

## Overview

Search API for 'Weblog' entry type

### Available Operations

* [SearchWeblog](#searchweblog) - Search API for 'Weblog' entry type

## SearchWeblog

API to search for entries of type Weblog

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
    res, err := s.TypeWeblog.SearchWeblog(ctx, operations.SearchWeblogRequest{
        ChangedateFrom: types.MustTimeFromString("2022-03-30T07:25:29.087Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-17T11:20:49.691Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-03T15:00:45.473Z"),
        CreatedateTo: types.MustTimeFromString("2022-08-17T20:43:04.085Z"),
        Description: sdk.String("commodi"),
        Filesuffix: sdk.String("a"),
        Fromdate: types.MustTimeFromString("2022-05-30T00:06:44.319Z"),
        Group: sdk.String("eum"),
        Max: sdk.Int64(526470),
        Maxlatitude: sdk.Float32(7129.97),
        Maxlongitude: sdk.Float32(6562.72),
        Minlatitude: sdk.Float32(5661.6),
        Minlongitude: sdk.Float32(1706.72),
        Name: sdk.String("Katie Raynor"),
        Skip: sdk.Int64(300155),
        Text: sdk.String("dicta"),
        Todate: types.MustTimeFromString("2022-06-09T21:39:19.685Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
