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

    req := operations.GetDeploymentsRequest{
        RequestBody: operations.GetDeploymentsRequestBody{
            DeviceFleetName: "corrupti",
            DeviceName: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
    }

    ctx := context.Background()
    res, err := s.GetDeployments(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeploymentsResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->