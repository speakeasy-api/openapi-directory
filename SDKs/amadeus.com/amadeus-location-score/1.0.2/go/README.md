# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amadeus.com/amadeus-location-score/1.0.2/go
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
    res, err := s.CategoryRatedAreas.GetCategoryRatedAreas(ctx, operations.GetCategoryRatedAreasRequest{
        Latitude: 5488.14,
        Longitude: 5928.45,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CategoryRatedAreas](docs/categoryratedareas/README.md)

* [GetCategoryRatedAreas](docs/categoryratedareas/README.md#getcategoryratedareas) - GET category rated areas
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
