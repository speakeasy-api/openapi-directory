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
            LayerName: "corrupti",
            VersionNumber: 592845,
        },
        QueryParams: operations.AddLayerVersionPermissionQueryParams{
            RevisionID: "distinctio",
        },
        Headers: operations.AddLayerVersionPermissionHeaders{
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
        },
        Request: operations.AddLayerVersionPermissionRequestBody{
            Action: "deserunt",
            OrganizationID: "suscipit",
            Principal: "iure",
            StatementID: "magnam",
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