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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetRecordsFormatRequest{
        AuthenticationToken: "corrupti",
        AndCategory: "Research papers",
        AndCentury: "distinctio",
        AndCollection: "quibusdam",
        AndContentPartner: "unde",
        AndCreator: "nulla",
        AndDate: "corrupti",
        AndDcType: "illum",
        AndDecade: "vel",
        AndFormat: "error",
        AndHasLargeThumbnailURL: "Y",
        AndHasLatLng: "false",
        AndIsCommercialUse: false,
        AndOrFilterField: "suscipit",
        AndPlacename: "iure",
        AndPrimaryCollection: "magnam",
        AndSubject: "debitis",
        AndTitle: "ipsa",
        AndUsage: "Unknown",
        AndYear: "tempora",
        Direction: "asc",
        ExcludeFiltersFromFacets: false,
        Facets: []GetRecordsFormatFacetsEnum{
            "copyright",
            "copyright",
        },
        FacetsPage: 528895,
        FacetsPerPage: 479977,
        Fields: "excepturi",
        Format: "json",
        GeoBbox: "recusandae",
        Page: 836079,
        PerPage: 71036,
        Sort: "syndication_date",
        Text: "veritatis",
        WithoutFilterField: "deserunt",
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