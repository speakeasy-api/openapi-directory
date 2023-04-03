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

    req := operations.AddLayerVersionPermissionRequest{
        LayerName: "corrupti",
        RequestBody: operations.AddLayerVersionPermissionRequestBody{
            Action: "provident",
            OrganizationID: "distinctio",
            Principal: "quibusdam",
            StatementID: "unde",
        },
        RevisionID: "nulla",
        VersionNumber: 544883,
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
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