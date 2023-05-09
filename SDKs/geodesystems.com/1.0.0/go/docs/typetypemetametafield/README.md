# TypeTypeMetametaField

## Overview

Search API for 'Metadata Field' entry type

### Available Operations

* [SearchTypeMetametaField](#searchtypemetametafield) - Search API for 'Metadata Field' entry type

## SearchTypeMetametaField

API to search for entries of type Metadata Field

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
    res, err := s.TypeTypeMetametaField.SearchTypeMetametaField(ctx, operations.SearchTypeMetametaFieldRequest{
        ChangedateFrom: types.MustTimeFromString("2021-02-13T02:11:36.009Z"),
        ChangedateTo: types.MustTimeFromString("2021-07-07T09:10:06.875Z"),
        CreatedateFrom: types.MustTimeFromString("2021-06-21T05:39:24.978Z"),
        CreatedateTo: types.MustTimeFromString("2022-11-11T08:45:03.667Z"),
        Description: sdk.String("illo"),
        Filesuffix: sdk.String("architecto"),
        Fromdate: types.MustTimeFromString("2022-09-06T08:10:19.294Z"),
        Group: sdk.String("velit"),
        Max: sdk.Int64(355685),
        Maxlatitude: sdk.Float32(5929.46),
        Maxlongitude: sdk.Float32(8207.25),
        Minlatitude: sdk.Float32(6124.25),
        Minlongitude: sdk.Float32(5035.98),
        Name: sdk.String("Deanna Kuhn"),
        SearchTypeMetametaFieldDatabaseColumnSize: sdk.Int64(633956),
        SearchTypeMetametaFieldDatatype: sdk.String("voluptate"),
        SearchTypeMetametaFieldEnumerationValues: sdk.String("cupiditate"),
        SearchTypeMetametaFieldFieldID: sdk.String("maxime"),
        SearchTypeMetametaFieldFieldIndex: sdk.Int64(828267),
        SearchTypeMetametaFieldMissing: sdk.String("nihil"),
        SearchTypeMetametaFieldProperties: sdk.String("sed"),
        SearchTypeMetametaFieldUnit: sdk.String("optio"),
        Skip: sdk.Int64(860830),
        Text: sdk.String("magni"),
        Todate: types.MustTimeFromString("2022-06-20T19:57:57.320Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
