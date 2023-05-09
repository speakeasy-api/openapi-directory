# TypeMediaPhotoalbum

## Overview

Search API for 'Photo Album' entry type

### Available Operations

* [SearchMediaPhotoalbum](#searchmediaphotoalbum) - Search API for 'Photo Album' entry type

## SearchMediaPhotoalbum

API to search for entries of type Photo Album

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
    res, err := s.TypeMediaPhotoalbum.SearchMediaPhotoalbum(ctx, operations.SearchMediaPhotoalbumRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-10T02:06:29.028Z"),
        ChangedateTo: types.MustTimeFromString("2022-06-20T03:06:33.282Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-07T13:46:35.143Z"),
        CreatedateTo: types.MustTimeFromString("2022-06-08T21:51:55.851Z"),
        Description: sdk.String("dolore"),
        Filesuffix: sdk.String("sunt"),
        Fromdate: types.MustTimeFromString("2022-05-21T12:17:59.359Z"),
        Group: sdk.String("odit"),
        Max: sdk.Int64(936845),
        Maxlatitude: sdk.Float32(3305.96),
        Maxlongitude: sdk.Float32(3731.06),
        Minlatitude: sdk.Float32(510.53),
        Minlongitude: sdk.Float32(3503.87),
        Name: sdk.String("Jackie Hammes"),
        Skip: sdk.Int64(338281),
        Text: sdk.String("quibusdam"),
        Todate: types.MustTimeFromString("2022-08-14T06:59:07.022Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
