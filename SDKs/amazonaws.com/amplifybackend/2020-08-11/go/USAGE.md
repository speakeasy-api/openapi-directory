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
            AppID: "unde",
            BackendEnvironmentName: "deserunt",
        },
        Headers: operations.CloneBackendHeaders{
            XAmzAlgorithm: "porro",
            XAmzContentSha256: "nulla",
            XAmzCredential: "id",
            XAmzDate: "vero",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "nihil",
        },
        Request: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "fuga",
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