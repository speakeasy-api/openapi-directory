# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amentum.space/global-magnet/1.3.0/go
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

    req := operations.AppAPIWMMEndpointsWMMMagneticFieldRequest{
        Altitude: 10,
        Latitude: 80,
        Longitude: 100,
        Year: 2020.5,
    }

    ctx := context.Background()
    res, err := s.AppAPIWMMEndpointsWMMMagneticField(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPIWMMEndpointsWMMMagneticField200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `AppAPIWMMEndpointsWMMMagneticField` - Calculate magnetic declination, inclination, total field intensity, and grid variation

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
