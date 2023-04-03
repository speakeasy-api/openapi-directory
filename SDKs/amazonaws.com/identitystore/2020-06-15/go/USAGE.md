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

    req := operations.CreateGroupRequest{
        CreateGroupRequest: shared.CreateGroupRequest{
            Description: "corrupti",
            DisplayName: "provident",
            IdentityStoreID: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
        XAmzTarget: "AWSIdentityStore.CreateGroup",
    }

    ctx := context.Background()
    res, err := s.CreateGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->