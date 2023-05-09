# TypeCommunityResource

## Overview

Search API for 'Facility' entry type

### Available Operations

* [SearchCommunityResource](#searchcommunityresource) - Search API for 'Facility' entry type

## SearchCommunityResource

API to search for entries of type Facility

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
    res, err := s.TypeCommunityResource.SearchCommunityResource(ctx, operations.SearchCommunityResourceRequest{
        ChangedateFrom: types.MustTimeFromString("2022-07-12T06:51:18.031Z"),
        ChangedateTo: types.MustTimeFromString("2022-07-09T21:21:21.316Z"),
        CreatedateFrom: types.MustTimeFromString("2022-06-29T10:30:00.284Z"),
        CreatedateTo: types.MustTimeFromString("2020-02-06T20:25:31.567Z"),
        Description: sdk.String("vel"),
        Filesuffix: sdk.String("architecto"),
        Fromdate: types.MustTimeFromString("2022-11-18T13:59:08.408Z"),
        Group: sdk.String("dicta"),
        Max: sdk.Int64(483706),
        Maxlatitude: sdk.Float32(2712.52),
        Maxlongitude: sdk.Float32(4582.59),
        Minlatitude: sdk.Float32(4037.93),
        Minlongitude: sdk.Float32(2352.63),
        Name: sdk.String("Mrs. Melissa Osinski"),
        SearchCommunityResourceAddress: sdk.String("expedita"),
        SearchCommunityResourceCity: sdk.String("aliquid"),
        SearchCommunityResourceResourceType: sdk.String("officia"),
        SearchCommunityResourceState: sdk.String("suscipit"),
        SearchCommunityResourceZipcode: sdk.String("aliquid"),
        Skip: sdk.Int64(21973),
        Text: sdk.String("eum"),
        Todate: types.MustTimeFromString("2022-05-21T16:44:14.214Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
