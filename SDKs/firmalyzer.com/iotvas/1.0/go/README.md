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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Device.DetectDevice(ctx, shared.DeviceFeatures{
        FtpBanner: sdk.String("corrupti"),
        Hostname: sdk.String("opulent-rabbit.org"),
        HTTPResponse: sdk.String("unde"),
        HTTPSResponse: sdk.String("nulla"),
        NicMac: sdk.String("corrupti"),
        SnmpSysdescr: sdk.String("illum"),
        SnmpSysoid: sdk.String("vel"),
        TelnetBanner: sdk.String("error"),
        UpnpResponse: sdk.String("deserunt"),
    }, operations.DetectDeviceSecurity{
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


### [Device](docs/device/README.md)

* [DetectDevice](docs/device/README.md#detectdevice) - Detect iot device by service banners and mac address

### [Firmware](docs/firmware/README.md)

* [GetAccounts](docs/firmware/README.md#getaccounts) - Get default accounts and password hashes of a firmware
* [GetConfigIssues](docs/firmware/README.md#getconfigissues) - Get default OS configuration issues of a device firmware
* [GetExpiredCerts](docs/firmware/README.md#getexpiredcerts) - Get expired digital certificates embedded in a device firmware
* [GetPrivateKeys](docs/firmware/README.md#getprivatekeys) - Get private crypto keys embedded in a device firmware
* [GetRisk](docs/firmware/README.md#getrisk) - Get iot device firmware risk analysis
* [GetWeakCerts](docs/firmware/README.md#getweakcerts) - Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
* [GetWeakKeys](docs/firmware/README.md#getweakkeys) - Get weak crypto keys with short length
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
