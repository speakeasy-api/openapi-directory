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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateMonitorRequest{
        Headers: operations.CreateMonitorHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateMonitorRequestBody{
            ClientToken: "illum",
            MaxCityNetworksToMonitor: 423655,
            MonitorName: "error",
            Resources: []string{
                "suscipit",
                "iure",
                "magnam",
            },
            Tags: map[string]string{
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateMonitor(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMonitorOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->