<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.CloneBackendRequest{
        PathParams: operations.CloneBackendPathParams{
            AppID: "sit",
            BackendEnvironmentName: "voluptas",
        },
        Headers: operations.CloneBackendHeaders{
            XAmzAlgorithm: "culpa",
            XAmzContentSha256: "expedita",
            XAmzCredential: "consequuntur",
            XAmzDate: "dolor",
            XAmzSecurityToken: "expedita",
            XAmzSignature: "voluptas",
            XAmzSignedHeaders: "fugit",
        },
        Request: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "et",
        },
    }
    
    res, err := s.CloneBackend(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CloneBackendResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->