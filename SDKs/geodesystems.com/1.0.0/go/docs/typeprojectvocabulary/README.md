# TypeProjectVocabulary

## Overview

Search API for 'Vocabulary' entry type

### Available Operations

* [SearchProjectVocabulary](#searchprojectvocabulary) - Search API for 'Vocabulary' entry type

## SearchProjectVocabulary

API to search for entries of type Vocabulary

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
    res, err := s.TypeProjectVocabulary.SearchProjectVocabulary(ctx, operations.SearchProjectVocabularyRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-24T10:46:29.092Z"),
        ChangedateTo: types.MustTimeFromString("2022-09-17T14:08:59.849Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-21T20:29:31.570Z"),
        CreatedateTo: types.MustTimeFromString("2022-02-09T20:46:26.848Z"),
        Description: sdk.String("vitae"),
        Filesuffix: sdk.String("dolor"),
        Fromdate: types.MustTimeFromString("2022-06-17T22:36:10.251Z"),
        Group: sdk.String("ut"),
        Max: sdk.Int64(989765),
        Maxlatitude: sdk.Float32(4446.25),
        Maxlongitude: sdk.Float32(6441.29),
        Minlatitude: sdk.Float32(9301.27),
        Minlongitude: sdk.Float32(932.54),
        Name: sdk.String("Pat Jacobs"),
        Skip: sdk.Int64(112014),
        Text: sdk.String("tenetur"),
        Todate: types.MustTimeFromString("2022-09-25T19:14:36.297Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
