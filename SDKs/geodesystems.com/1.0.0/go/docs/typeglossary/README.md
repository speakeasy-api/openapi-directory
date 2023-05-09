# TypeGlossary

## Overview

Search API for 'Glossary' entry type

### Available Operations

* [SearchGlossary](#searchglossary) - Search API for 'Glossary' entry type

## SearchGlossary

API to search for entries of type Glossary

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
    res, err := s.TypeGlossary.SearchGlossary(ctx, operations.SearchGlossaryRequest{
        ChangedateFrom: types.MustTimeFromString("2022-05-17T06:03:04.160Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-10T10:43:04.313Z"),
        CreatedateFrom: types.MustTimeFromString("2022-12-23T03:22:14.898Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-28T00:11:01.662Z"),
        Description: sdk.String("nesciunt"),
        Filesuffix: sdk.String("mollitia"),
        Fromdate: types.MustTimeFromString("2022-02-23T13:33:54.639Z"),
        Group: sdk.String("nostrum"),
        Max: sdk.Int64(475325),
        Maxlatitude: sdk.Float32(3306),
        Maxlongitude: sdk.Float32(9692.06),
        Minlatitude: sdk.Float32(662.07),
        Minlongitude: sdk.Float32(2656.32),
        Name: sdk.String("Maria Veum"),
        Skip: sdk.Int64(256114),
        Text: sdk.String("dolorum"),
        Todate: types.MustTimeFromString("2021-08-23T14:57:18.247Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
