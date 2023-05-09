# TypeHomepage

## Overview

Search API for 'Home Page' entry type

### Available Operations

* [SearchHomepage](#searchhomepage) - Search API for 'Home Page' entry type

## SearchHomepage

API to search for entries of type Home Page

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
    res, err := s.TypeHomepage.SearchHomepage(ctx, operations.SearchHomepageRequest{
        ChangedateFrom: types.MustTimeFromString("2021-01-25T01:11:52.226Z"),
        ChangedateTo: types.MustTimeFromString("2021-02-26T12:16:30.063Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-13T08:38:01.413Z"),
        CreatedateTo: types.MustTimeFromString("2022-09-14T23:28:45.223Z"),
        Description: sdk.String("modi"),
        Filesuffix: sdk.String("itaque"),
        Fromdate: types.MustTimeFromString("2022-03-15T19:59:59.350Z"),
        Group: sdk.String("consequuntur"),
        Max: sdk.Int64(828147),
        Maxlatitude: sdk.Float32(8768.4),
        Maxlongitude: sdk.Float32(9851.09),
        Minlatitude: sdk.Float32(7737.11),
        Minlongitude: sdk.Float32(7833.97),
        Name: sdk.String("Ms. Jimmie Wisozk"),
        Skip: sdk.Int64(458412),
        Text: sdk.String("iure"),
        Todate: types.MustTimeFromString("2022-10-18T23:30:23.407Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
