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

    req := operations.DeleteResourcePermissionRequest{
        RequestBody: operations.DeleteResourcePermissionRequestBody{
            ActionType: "RESTORE",
            ResourceArn: "corrupti",
            SourceResourceArn: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
    }

    ctx := context.Background()
    res, err := s.DeleteResourcePermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePermissionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->