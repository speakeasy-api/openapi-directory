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

    req := operations.GetRoutingControlStateRequest{
        GetRoutingControlStateRequest: shared.GetRoutingControlStateRequest{
            RoutingControlArn: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        XAmzTarget: "ToggleCustomerAPI.GetRoutingControlState",
    }

    ctx := context.Background()
    res, err := s.GetRoutingControlState(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRoutingControlStateResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->