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

    req := operations.AssociateRoleToGroupRequest{
        PathParams: operations.AssociateRoleToGroupPathParams{
            GroupID: "corrupti",
        },
        Headers: operations.AssociateRoleToGroupHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateRoleToGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRoleToGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->