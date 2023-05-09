# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bigdatacloud.net/1.0.0/go
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
    res, err := s.IPGeolocationWithConfidenceAreaAndHazardReportAPI(ctx, operations.IPGeolocationWithConfidenceAreaAndHazardReportAPIRequest{
        IP: sdk.String("193.114.112.122"),
        Key: sdk.String("{{API KEY}}"),
        LocalityLanguage: sdk.String("en"),
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

### [SDK](docs/sdk/README.md)

* [IPGeolocationWithConfidenceAreaAndHazardReportAPI](docs/sdk/README.md#ipgeolocationwithconfidenceareaandhazardreportapi) - IP Geolocation with Confidence Area and Hazard Report API
* [IPGeolocationWithConfidenceAreaAPI](docs/sdk/README.md#ipgeolocationwithconfidenceareaapi) - IP Geolocation with Confidence Area API
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
