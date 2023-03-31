# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/firmalyzer.com/iotvas/1.0/go
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

    req := shared.DeviceFeatures{
        FtpBanner: "corrupti",
        Hostname: "opulent-rabbit.org",
        HTTPResponse: "unde",
        HTTPSResponse: "nulla",
        NicMac: "corrupti",
        SnmpSysdescr: "illum",
        SnmpSysoid: "vel",
        TelnetBanner: "error",
        UpnpResponse: "deserunt",
    }

    ctx := context.Background()
    res, err := s.Device.DetectDevice(ctx, req, operations.DetectDeviceSecurity{
        APIKeyHeader: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Device

* `DetectDevice` - Detect iot device by service banners and mac address

### Firmware

* `GetAccounts` - Get default accounts and password hashes of a firmware
* `GetConfigIssues` - Get default OS configuration issues of a device firmware
* `GetExpiredCerts` - Get expired digital certificates embedded in a device firmware
* `GetPrivateKeys` - Get private crypto keys embedded in a device firmware
* `GetRisk` - Get iot device firmware risk analysis
* `GetWeakCerts` - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* `GetWeakKeys` - Get weak crypto keys with short length
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
