<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DetectDeviceDetectPostRequest{
        Security: operations.DetectDeviceDetectPostSecurity{
            APIKeyHeader: shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: shared.DeviceFeatures{
            FtpBanner: "laboriosam",
            Hostname: "quia",
            HTTPResponse: "sunt",
            HTTPSResponse: "inventore",
            NicMac: "nobis",
            SnmpSysdescr: "eum",
            SnmpSysoid: "perferendis",
            TelnetBanner: "sapiente",
            UpnpResponse: "similique",
        },
    }
    
    res, err := s.Device.DetectDeviceDetectPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceInfo != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->