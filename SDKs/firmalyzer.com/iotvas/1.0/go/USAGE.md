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

    req := operations.DetectDeviceRequest{
        Security: operations.DetectDeviceSecurity{
            APIKeyHeader: shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.DeviceFeatures{
            FtpBanner: "corrupti",
            Hostname: "opulent-rabbit.org",
            HTTPResponse: "unde",
            HTTPSResponse: "nulla",
            NicMac: "corrupti",
            SnmpSysdescr: "illum",
            SnmpSysoid: "vel",
            TelnetBanner: "error",
            UpnpResponse: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.Device.DetectDevice(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceInfo != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->