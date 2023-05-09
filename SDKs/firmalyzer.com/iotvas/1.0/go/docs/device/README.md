# Device

### Available Operations

* [DetectDevice](#detectdevice) - Detect iot device by service banners and mac address

## DetectDevice

Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information

### Example Usage

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
        FtpBanner: sdk.String("suscipit"),
        Hostname: sdk.String("innocent-effect.org"),
        HTTPResponse: sdk.String("ipsa"),
        HTTPSResponse: sdk.String("delectus"),
        NicMac: sdk.String("tempora"),
        SnmpSysdescr: sdk.String("suscipit"),
        SnmpSysoid: sdk.String("molestiae"),
        TelnetBanner: sdk.String("minus"),
        UpnpResponse: sdk.String("placeat"),
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
