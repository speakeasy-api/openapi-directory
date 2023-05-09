# TypeOwlClass

## Overview

Search API for 'OWL Class' entry type

### Available Operations

* [SearchOwlClass](#searchowlclass) - Search API for 'OWL Class' entry type

## SearchOwlClass

API to search for entries of type OWL Class

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
    res, err := s.TypeOwlClass.SearchOwlClass(ctx, operations.SearchOwlClassRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-09T03:00:23.242Z"),
        ChangedateTo: types.MustTimeFromString("2022-10-22T11:14:59.383Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-25T19:18:27.795Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-07T19:08:46.997Z"),
        Description: sdk.String("dolorem"),
        Filesuffix: sdk.String("architecto"),
        Fromdate: types.MustTimeFromString("2022-11-13T00:38:19.332Z"),
        Group: sdk.String("nulla"),
        Max: sdk.Int64(316541),
        Maxlatitude: sdk.Float32(735.74),
        Maxlongitude: sdk.Float32(2987.5),
        Minlatitude: sdk.Float32(9618.42),
        Minlongitude: sdk.Float32(2550.64),
        Name: sdk.String("Loren Jakubowski IV"),
        Skip: sdk.Int64(711615),
        Text: sdk.String("hic"),
        Todate: types.MustTimeFromString("2022-03-17T11:23:26.153Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
