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

    req := operations.CloseTunnelRequest{
        CloseTunnelRequest: shared.CloseTunnelRequest{
            Delete: false,
            TunnelID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "IoTSecuredTunneling.CloseTunnel",
    }

    ctx := context.Background()
    res, err := s.CloseTunnel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloseTunnelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->