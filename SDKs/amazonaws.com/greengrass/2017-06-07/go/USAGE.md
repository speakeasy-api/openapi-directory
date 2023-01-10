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
    
    req := operations.AssociateRoleToGroupRequest{
        PathParams: operations.AssociateRoleToGroupPathParams{
            GroupID: "recusandae",
        },
        Headers: operations.AssociateRoleToGroupHeaders{
            XAmzAlgorithm: "iste",
            XAmzContentSha256: "qui",
            XAmzCredential: "veritatis",
            XAmzDate: "alias",
            XAmzSecurityToken: "eum",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "iste",
        },
        Request: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "deleniti",
        },
    }
    
    res, err := s.AssociateRoleToGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRoleToGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->