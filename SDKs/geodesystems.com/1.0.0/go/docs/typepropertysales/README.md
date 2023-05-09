# TypePropertySales

## Overview

Search API for 'Property Sales' entry type

### Available Operations

* [SearchPropertySales](#searchpropertysales) - Search API for 'Property Sales' entry type

## SearchPropertySales

API to search for entries of type Property Sales

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
    res, err := s.TypePropertySales.SearchPropertySales(ctx, operations.SearchPropertySalesRequest{
        ChangedateFrom: types.MustTimeFromString("2020-03-31T22:12:08.601Z"),
        ChangedateTo: types.MustTimeFromString("2022-12-02T09:58:06.659Z"),
        CreatedateFrom: types.MustTimeFromString("2022-07-09T12:42:18.572Z"),
        CreatedateTo: types.MustTimeFromString("2022-07-19T01:47:33.364Z"),
        Description: sdk.String("sed"),
        Filesuffix: sdk.String("dolorem"),
        Fromdate: types.MustTimeFromString("2022-08-27T04:15:11.226Z"),
        Group: sdk.String("amet"),
        Max: sdk.Int64(454165),
        Maxlatitude: sdk.Float32(4542.32),
        Maxlongitude: sdk.Float32(8652.12),
        Minlatitude: sdk.Float32(7914.21),
        Minlongitude: sdk.Float32(9550.65),
        Name: sdk.String("Jimmie McGlynn"),
        SearchDbPropertySalesBuildingDescription: sdk.String("omnis"),
        SearchDbPropertySalesBuildingDesign: sdk.String("quam"),
        SearchDbPropertySalesBuyer: sdk.String("exercitationem"),
        SearchDbPropertySalesCity: sdk.String("voluptates"),
        SearchDbPropertySalesLocation: sdk.String("sequi"),
        SearchDbPropertySalesPropertyAddress: sdk.String("quis"),
        SearchDbPropertySalesSaleDate: sdk.String("commodi"),
        SearchDbPropertySalesSalePrice: sdk.Float64(4264.81),
        SearchDbPropertySalesSeller: sdk.String("rem"),
        SearchDbPropertySalesSubdivision: sdk.String("aliquid"),
        SearchDbPropertySalesType: sdk.String("aperiam"),
        SearchDbPropertySalesZipcode: sdk.String("perspiciatis"),
        Skip: sdk.Int64(145841),
        Text: sdk.String("itaque"),
        Todate: types.MustTimeFromString("2021-06-19T12:32:11.312Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
