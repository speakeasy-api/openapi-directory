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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateMonitorRequest{
        RequestBody: operations.CreateMonitorRequestBody{
            ClientToken: "corrupti",
            MaxCityNetworksToMonitor: 592845,
            MonitorName: "distinctio",
            Resources: []string{
                "unde",
                "nulla",
                "corrupti",
                "illum",
            },
            Tags: map[string]string{
                "error": "deserunt",
                "suscipit": "iure",
            },
        },
        XAmzAlgorithm: "magnam",
        XAmzContentSha256: "debitis",
        XAmzCredential: "ipsa",
        XAmzDate: "delectus",
        XAmzSecurityToken: "tempora",
        XAmzSignature: "suscipit",
        XAmzSignedHeaders: "molestiae",
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