# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/change.local/v1/go
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
    res, err := s.GetAPIV1DonationsCarbonCalculate(ctx, operations.GetAPIV1DonationsCarbonCalculateRequest{
        DestinationAddress: sdk.Float64(5488.14),
        DistanceMi: sdk.Float64(5928.45),
        OriginAddress: sdk.Float64(7151.9),
        TransportationMethod: operations.GetAPIV1DonationsCarbonCalculateTransportationMethodEnumSea.ToPointer(),
        WeightLb: 6027.63,
    }, operations.GetAPIV1DonationsCarbonCalculateSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
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

* [GetAPIV1DonationsCarbonCalculate](docs/sdk/README.md#getapiv1donationscarboncalculate) - Calculate shipping carbon offset
* [GetAPIV1DonationsCarbonStats](docs/sdk/README.md#getapiv1donationscarbonstats) - Retrieve carbon offset stats
* [GetAPIV1DonationsCryptoCalculate](docs/sdk/README.md#getapiv1donationscryptocalculate) - Calculate crypto carbon offset
* [GetAPIV1DonationsIndex](docs/sdk/README.md#getapiv1donationsindex) - List your donations
* [GetAPIV1DonationsShow](docs/sdk/README.md#getapiv1donationsshow) - Retrieve a donation
* [GetAPIV1NonprofitsList](docs/sdk/README.md#getapiv1nonprofitslist) - Search a nonprofit
* [GetAPIV1NonprofitsShow](docs/sdk/README.md#getapiv1nonprofitsshow) - Show a nonprofit
* [PostAPIV1DonationsCreate](docs/sdk/README.md#postapiv1donationscreate) - Create a donation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
