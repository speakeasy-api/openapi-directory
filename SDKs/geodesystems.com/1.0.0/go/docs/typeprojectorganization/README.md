# TypeProjectOrganization

## Overview

Search API for 'Organization' entry type

### Available Operations

* [SearchProjectOrganization](#searchprojectorganization) - Search API for 'Organization' entry type

## SearchProjectOrganization

API to search for entries of type Organization

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
    res, err := s.TypeProjectOrganization.SearchProjectOrganization(ctx, operations.SearchProjectOrganizationRequest{
        ChangedateFrom: types.MustTimeFromString("2022-04-10T02:34:04.729Z"),
        ChangedateTo: types.MustTimeFromString("2021-03-14T12:10:11.341Z"),
        CreatedateFrom: types.MustTimeFromString("2022-03-25T23:55:31.783Z"),
        CreatedateTo: types.MustTimeFromString("2021-04-20T17:26:00.007Z"),
        Description: sdk.String("distinctio"),
        Filesuffix: sdk.String("voluptatem"),
        Fromdate: types.MustTimeFromString("2022-09-09T18:41:13.955Z"),
        Group: sdk.String("consequatur"),
        Max: sdk.Int64(515433),
        Maxlatitude: sdk.Float32(8310.67),
        Maxlongitude: sdk.Float32(4159.53),
        Minlatitude: sdk.Float32(8436.79),
        Minlongitude: sdk.Float32(2312.55),
        Name: sdk.String("Michele Wehner"),
        SearchProjectOrganizationOrganizationType: sdk.String("dolore"),
        SearchProjectOrganizationStatus: sdk.String("enim"),
        Skip: sdk.Int64(353904),
        Text: sdk.String("perspiciatis"),
        Todate: types.MustTimeFromString("2022-08-06T11:53:42.173Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
