# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/digitalnz.org/3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### APICalls

* `GetRecordsFormat` - Run queries against DigitalNZ metadata search service.
* `GetRecordsRecordIDFormat` - View metadata associated with a single record.
* `GetRecordsRecordIDMoreLikeThisFormat` - The "More Like This" call returns similar records to the specified ID.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
