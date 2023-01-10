<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetRecordsFormatRequest{
        PathParams: operations.GetRecordsFormatPathParams{
            Format: "xml",
        },
        QueryParams: operations.GetRecordsFormatQueryParams{
            AndCategory: "Audio",
            AndCentury: "praesentium",
            AndCollection: "sint",
            AndContentPartner: "qui",
            AndCreator: "atque",
            AndDate: "iusto",
            AndDcType: "rem",
            AndDecade: "dolorum",
            AndFormat: "ut",
            AndHasLargeThumbnailURL: "Y",
            AndHasLatLng: false,
            AndIsCommercialUse: true,
            AndOrFilterField: "maiores",
            AndPlacename: "ab",
            AndPrimaryCollection: "amet",
            AndSubject: "fugiat",
            AndTitle: "est",
            AndUsage: "Share",
            AndYear: "consequatur",
            APIKey: "quia",
            Direction: "asc",
            ExcludeFiltersFromFacets: false,
            Facets: []shared.FieldsEnum2{
                "creator",
                "century",
            },
            FacetsPage: 7749255547755295069,
            FacetsPerPage: 2063540456602819,
            Fields: "corporis",
            GeoBbox: "quaerat",
            Page: 693839712308138010,
            PerPage: 5270800729784320551,
            Sort: "syndication_date",
            Text: "quam",
            WithoutFilterField: "autem",
        },
    }
    
    res, err := s.APICalls.GetRecordsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordsFormat200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->