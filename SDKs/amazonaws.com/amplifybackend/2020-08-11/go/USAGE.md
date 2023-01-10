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
            AppID: "laboriosam",
            BackendEnvironmentName: "velit",
        },
        Headers: operations.CloneBackendHeaders{
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "tempore",
            XAmzCredential: "fugit",
            XAmzDate: "aut",
            XAmzSecurityToken: "tempora",
            XAmzSignature: "aliquid",
            XAmzSignedHeaders: "mollitia",
        },
        Request: operations.CloneBackendRequestBody{
            TargetEnvironmentName: "non",
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