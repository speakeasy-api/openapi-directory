# TypeTypeMetametaDictionary

## Overview

Search API for 'Metadata Dictionary' entry type

### Available Operations

* [SearchTypeMetametaDictionary](#searchtypemetametadictionary) - Search API for 'Metadata Dictionary' entry type

## SearchTypeMetametaDictionary

API to search for entries of type Metadata Dictionary

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
    res, err := s.TypeTypeMetametaDictionary.SearchTypeMetametaDictionary(ctx, operations.SearchTypeMetametaDictionaryRequest{
        ChangedateFrom: types.MustTimeFromString("2022-09-04T22:19:54.604Z"),
        ChangedateTo: types.MustTimeFromString("2020-12-14T09:11:21.253Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-22T07:55:07.552Z"),
        CreatedateTo: types.MustTimeFromString("2022-01-23T09:14:18.952Z"),
        Description: sdk.String("quis"),
        Filesuffix: sdk.String("dolorem"),
        Fromdate: types.MustTimeFromString("2022-09-13T10:23:58.341Z"),
        Group: sdk.String("quo"),
        Max: sdk.Int64(91736),
        Maxlatitude: sdk.Float32(761.45),
        Maxlongitude: sdk.Float32(6688.81),
        Minlatitude: sdk.Float32(1580.59),
        Minlongitude: sdk.Float32(3322.37),
        Name: sdk.String("Wallace Ritchie"),
        SearchTypeMetametaDictionaryDictionaryType: sdk.String("sunt"),
        SearchTypeMetametaDictionaryFieldIndex: sdk.Int64(982804),
        SearchTypeMetametaDictionaryHandlerClass: sdk.String("excepturi"),
        SearchTypeMetametaDictionaryIsgroup: sdk.Bool(false),
        SearchTypeMetametaDictionaryProperties: sdk.String("ducimus"),
        SearchTypeMetametaDictionaryShortName: sdk.String("dolore"),
        SearchTypeMetametaDictionarySuperType: sdk.String("aspernatur"),
        SearchTypeMetametaDictionaryWikiText: sdk.String("molestias"),
        Skip: sdk.Int64(686291),
        Text: sdk.String("at"),
        Todate: types.MustTimeFromString("2021-08-27T10:02:33.600Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
