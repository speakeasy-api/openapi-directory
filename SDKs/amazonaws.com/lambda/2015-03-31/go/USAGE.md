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

    req := operations.AddLayerVersionPermissionRequest{
        PathParams: operations.AddLayerVersionPermissionPathParams{
            LayerName: "unde",
            VersionNumber: 592845,
        },
        QueryParams: operations.AddLayerVersionPermissionQueryParams{
            RevisionID: "porro",
        },
        Headers: operations.AddLayerVersionPermissionHeaders{
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
        },
        Request: operations.AddLayerVersionPermissionRequestBody{
            Action: "facilis",
            OrganizationID: "eum",
            Principal: "iusto",
            StatementID: "ullam",
        },
    }

    ctx := context.Background()
    res, err := s.AddLayerVersionPermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddLayerVersionPermissionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->