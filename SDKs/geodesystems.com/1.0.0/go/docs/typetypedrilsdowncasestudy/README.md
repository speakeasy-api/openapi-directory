# TypeTypeDrilsdownCasestudy

## Overview

Search API for 'Drilsdown Case Study' entry type

### Available Operations

* [SearchTypeDrilsdownCasestudy](#searchtypedrilsdowncasestudy) - Search API for 'Drilsdown Case Study' entry type

## SearchTypeDrilsdownCasestudy

API to search for entries of type Drilsdown Case Study

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
    res, err := s.TypeTypeDrilsdownCasestudy.SearchTypeDrilsdownCasestudy(ctx, operations.SearchTypeDrilsdownCasestudyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-10T06:27:07.573Z"),
        ChangedateTo: types.MustTimeFromString("2021-01-15T19:33:26.213Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-06T05:38:53.226Z"),
        CreatedateTo: types.MustTimeFromString("2021-05-27T13:23:11.341Z"),
        Description: sdk.String("aspernatur"),
        Filesuffix: sdk.String("eaque"),
        Fromdate: types.MustTimeFromString("2020-10-31T16:33:47.128Z"),
        Group: sdk.String("ex"),
        Max: sdk.Int64(483626),
        Maxlatitude: sdk.Float32(9630.94),
        Maxlongitude: sdk.Float32(7949.27),
        Minlatitude: sdk.Float32(2835.14),
        Minlongitude: sdk.Float32(7160.58),
        Name: sdk.String("Julia Hartmann"),
        Skip: sdk.Int64(577707),
        Text: sdk.String("debitis"),
        Todate: types.MustTimeFromString("2022-10-28T15:46:21.236Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
