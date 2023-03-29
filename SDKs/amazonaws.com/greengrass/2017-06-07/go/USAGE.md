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
            GroupID: "unde",
        },
        Headers: operations.AssociateRoleToGroupHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "nihil",
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