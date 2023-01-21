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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateMeshRequestBody{
            ClientToken: "voluptas",
            MeshName: "fugit",
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