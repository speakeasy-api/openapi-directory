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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAPIV1DonationsCarbonCalculateRequest{
        DestinationAddress: 5488.14,
        DistanceMi: 5928.45,
        OriginAddress: 7151.9,
        TransportationMethod: "sea",
        WeightLb: 6027.63,
    }

    ctx := context.Background()
    res, err := s.GetAPIV1DonationsCarbonCalculate(ctx, req, operations.GetAPIV1DonationsCarbonCalculateSecurity{
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

### SDK SDK

* `GetAPIV1DonationsCarbonCalculate` - Calculate shipping carbon offset
* `GetAPIV1DonationsCarbonStats` - Retrieve carbon offset stats
* `GetAPIV1DonationsCryptoCalculate` - Calculate crypto carbon offset
* `GetAPIV1DonationsIndex` - List your donations
* `GetAPIV1DonationsShow` - Retrieve a donation
* `GetAPIV1NonprofitsList` - Search a nonprofit
* `GetAPIV1NonprofitsShow` - Show a nonprofit
* `PostAPIV1DonationsCreate` - Create a donation
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
