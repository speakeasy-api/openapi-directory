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
            Format: "json",
        },
        QueryParams: operations.GetRecordsFormatQueryParams{
            AndCategory: "Manuscripts",
            AndCentury: "culpa",
            AndCollection: "expedita",
            AndContentPartner: "consequuntur",
            AndCreator: "dolor",
            AndDate: "expedita",
            AndDcType: "voluptas",
            AndDecade: "fugit",
            AndFormat: "et",
            AndHasLargeThumbnailURL: "Y",
            AndHasLatLng: true,
            AndIsCommercialUse: false,
            AndOrFilterField: "debitis",
            AndPlacename: "voluptatum",
            AndPrimaryCollection: "et",
            AndSubject: "ut",
            AndTitle: "dolorem",
            AndUsage: "Share",
            AndYear: "voluptate",
            APIKey: "iste",
            Direction: "asc",
            ExcludeFiltersFromFacets: true,
            Facets: []shared.FieldsEnum2{
                "usage",
            },
            FacetsPage: 6392442863481646880,
            FacetsPerPage: 3706853784096366226,
            Fields: "odio",
            GeoBbox: "dolore",
            Page: 4035568504096476779,
            PerPage: 959367522974354090,
            Sort: "syndication_date",
            Text: "totam",
            WithoutFilterField: "commodi",
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