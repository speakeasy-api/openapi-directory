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

    req := operations.CloneBackendRequest{
        RequestBody: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        AppID: "vel",
        BackendEnvironmentName: "error",
    }

    ctx := context.Background()
    res, err := s.CloneBackend(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneBackendResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->