# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/deutschebahn.com/reisezentren/v1/go
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
    res, err := s.GetReisezentren(ctx, operations.GetReisezentrenRequest{
        Name: sdk.String("Terrence Rau"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TravelCenterList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetReisezentren](docs/sdk/README.md#getreisezentren) - Get all station infos
* [GetReisezentrenLocLatLon](docs/sdk/README.md#getreisezentrenloclatlon) - Get information about a station near a location
* [GetReisezentrenLocLatLonDist](docs/sdk/README.md#getreisezentrenloclatlondist) - Get stations in a given radius
* [GetReisezentrenID](docs/sdk/README.md#getreisezentrenid) - Get information about a specific station
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
