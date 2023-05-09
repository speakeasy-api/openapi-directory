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