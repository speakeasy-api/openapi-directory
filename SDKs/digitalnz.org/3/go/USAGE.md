<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetRecordsFormatRequest{
        PathParams: operations.GetRecordsFormatPathParams{
            Format: "xml",
        },
        QueryParams: operations.GetRecordsFormatQueryParams{
            AndCategory: "Research papers",
            AndCentury: "porro",
            AndCollection: "nulla",
            AndContentPartner: "id",
            AndCreator: "vero",
            AndDate: "perspiciatis",
            AndDcType: "nulla",
            AndDecade: "nihil",
            AndFormat: "fuga",
            AndHasLargeThumbnailURL: "Y",
            AndHasLatLng: "true",
            AndIsCommercialUse: false,
            AndOrFilterField: "iusto",
            AndPlacename: "ullam",
            AndPrimaryCollection: "saepe",
            AndSubject: "inventore",
            AndTitle: "sapiente",
            AndUsage: "Modify",
            AndYear: "eum",
            Direction: "asc",
            ExcludeFiltersFromFacets: false,
            Facets: []GetRecordsFormatFacetsEnum{
                "copyright",
                "decade",
                "decade",
                "century",
            },
            FacetsPage: 392785,
            FacetsPerPage: 925597,
            Fields: "quo",
            GeoBbox: "quasi",
            Page: 337396,
            PerPage: 87129,
            Sort: "date",
            Text: "voluptatem",
            WithoutFilterField: "consequatur",
        },
        Headers: operations.GetRecordsFormatHeaders{
            AuthenticationToken: "fugiat",
        },
    }

    ctx := context.Background()
    res, err := s.APICalls.GetRecordsFormat(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRecordsFormat200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->