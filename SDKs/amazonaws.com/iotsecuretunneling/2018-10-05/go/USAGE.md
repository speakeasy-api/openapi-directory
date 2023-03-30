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

    req := operations.CloseTunnelRequest{
        Headers: operations.CloseTunnelHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "IoTSecuredTunneling.CloseTunnel",
        },
        Request: shared.CloseTunnelRequest{
            Delete: false,
            TunnelID: "illum",
        },
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