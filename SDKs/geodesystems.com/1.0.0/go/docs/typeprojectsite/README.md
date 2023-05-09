# TypeProjectSite

## Overview

Search API for 'Site' entry type

### Available Operations

* [SearchProjectSite](#searchprojectsite) - Search API for 'Site' entry type

## SearchProjectSite

API to search for entries of type Site

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
    res, err := s.TypeProjectSite.SearchProjectSite(ctx, operations.SearchProjectSiteRequest{
        ChangedateFrom: types.MustTimeFromString("2022-08-22T02:23:15.742Z"),
        ChangedateTo: types.MustTimeFromString("2021-07-22T23:14:33.263Z"),
        CreatedateFrom: types.MustTimeFromString("2021-08-16T07:12:25.575Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-21T09:06:28.916Z"),
        Description: sdk.String("quisquam"),
        Filesuffix: sdk.String("praesentium"),
        Fromdate: types.MustTimeFromString("2022-08-18T22:20:38.381Z"),
        Group: sdk.String("officiis"),
        Max: sdk.Int64(196497),
        Maxlatitude: sdk.Float32(1655.45),
        Maxlongitude: sdk.Float32(298.81),
        Minlatitude: sdk.Float32(6659.6),
        Minlongitude: sdk.Float32(2261.81),
        Name: sdk.String("Natasha Wiza"),
        SearchProjectSiteCountry: sdk.String("dolorum"),
        SearchProjectSiteCounty: sdk.String("quibusdam"),
        SearchProjectSiteNetwork: sdk.String("earum"),
        SearchProjectSiteShortName: sdk.String("excepturi"),
        SearchProjectSiteSiteType: sdk.String("numquam"),
        SearchProjectSiteState: sdk.String("molestiae"),
        SearchProjectSiteStatus: sdk.String("impedit"),
        Skip: sdk.Int64(621883),
        Text: sdk.String("animi"),
        Todate: types.MustTimeFromString("2022-03-15T07:15:52.266Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
