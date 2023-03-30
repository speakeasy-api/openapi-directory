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

    req := operations.CloneBackendRequest{
        PathParams: operations.CloneBackendPathParams{
            AppID: "corrupti",
            BackendEnvironmentName: "provident",
        },
        Headers: operations.CloneBackendHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "quibusdam",
            XAmzCredential: "unde",
            XAmzDate: "nulla",
            XAmzSecurityToken: "corrupti",
            XAmzSignature: "illum",
            XAmzSignedHeaders: "vel",
        },
        Request: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "error",
        },
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