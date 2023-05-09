# TypeTypePointIcebridgeAtmIcessn

## Overview

Search API for 'ATM Ice SSN Data' entry type

### Available Operations

* [SearchTypePointIcebridgeAtmIcessn](#searchtypepointicebridgeatmicessn) - Search API for 'ATM Ice SSN Data' entry type

## SearchTypePointIcebridgeAtmIcessn

API to search for entries of type ATM Ice SSN Data

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
    res, err := s.TypeTypePointIcebridgeAtmIcessn.SearchTypePointIcebridgeAtmIcessn(ctx, operations.SearchTypePointIcebridgeAtmIcessnRequest{
        ChangedateFrom: types.MustTimeFromString("2022-10-03T23:06:17.189Z"),
        ChangedateTo: types.MustTimeFromString("2022-01-02T21:29:43.687Z"),
        CreatedateFrom: types.MustTimeFromString("2022-04-25T13:28:01.783Z"),
        CreatedateTo: types.MustTimeFromString("2022-03-14T14:52:18.325Z"),
        Description: sdk.String("consequatur"),
        Filesuffix: sdk.String("accusantium"),
        Fromdate: types.MustTimeFromString("2022-12-05T01:37:32.821Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(578452),
        Maxlatitude: sdk.Float32(5525.12),
        Maxlongitude: sdk.Float32(3971.12),
        Minlatitude: sdk.Float32(1930.48),
        Minlongitude: sdk.Float32(6328.85),
        Name: sdk.String("Edwin Bogisich"),
        Skip: sdk.Int64(760942),
        Text: sdk.String("adipisci"),
        Todate: types.MustTimeFromString("2022-03-13T22:56:12.922Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
