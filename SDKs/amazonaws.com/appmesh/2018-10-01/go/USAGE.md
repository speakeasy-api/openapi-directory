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
    
    req := operations.CreateMeshRequest{
        Headers: operations.CreateMeshHeaders{
            XAmzAlgorithm: "nihil",
            XAmzContentSha256: "quam",
            XAmzCredential: "et",
            XAmzDate: "vel",
            XAmzSecurityToken: "itaque",
            XAmzSignature: "provident",
            XAmzSignedHeaders: "voluptatem",
        },
        Request: operations.CreateMeshRequestBody{
            ClientToken: "qui",
            MeshName: "modi",
        },
    }
    
    res, err := s.CreateMesh(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMeshOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->