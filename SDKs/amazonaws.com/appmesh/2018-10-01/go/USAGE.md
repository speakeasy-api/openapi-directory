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

    req := operations.CreateMeshRequest{
        Headers: operations.CreateMeshHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateMeshRequestBody{
            ClientToken: "illum",
            MeshName: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.CreateMesh(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMeshOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->