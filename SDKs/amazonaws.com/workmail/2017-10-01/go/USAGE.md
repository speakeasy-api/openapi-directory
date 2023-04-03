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

    req := operations.AssociateDelegateToResourceRequest{
        AssociateDelegateToResourceRequest: shared.AssociateDelegateToResourceRequest{
            EntityID: "corrupti",
            OrganizationID: "provident",
            ResourceID: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "WorkMailService.AssociateDelegateToResource",
    }

    ctx := context.Background()
    res, err := s.AssociateDelegateToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->