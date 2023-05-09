# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bikewise.org/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Incidents.GETVersionIncidentsFormat(ctx, operations.GETVersionIncidentsFormatRequest{
        IncidentType: operations.GETVersionIncidentsFormatIncidentTypeEnumUnconfirmed.ToPointer(),
        OccurredAfter: sdk.Int(592845),
        OccurredBefore: sdk.Int(715190),
        Page: sdk.Int(844266),
        PerPage: sdk.Int(602763),
        Proximity: sdk.String("nulla"),
        ProximitySquare: sdk.Int(544883),
        Query: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Incidents](docs/incidents/README.md)

* [GETVersionIncidentsFormat](docs/incidents/README.md#getversionincidentsformat) - Paginated incidents matching parameters
* [GETVersionIncidentsIDFormat](docs/incidents/README.md#getversionincidentsidformat)

### [Locations](docs/locations/README.md)

* [GETVersionLocationsFormat](docs/locations/README.md#getversionlocationsformat) - Unpaginated geojson response
* [GETVersionLocationsMarkersFormat](docs/locations/README.md#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
