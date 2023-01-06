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
            GroupID: "accusantium",
        },
        Headers: operations.AssociateRoleToGroupHeaders{
            XAmzAlgorithm: "ut",
            XAmzContentSha256: "consequatur",
            XAmzCredential: "doloremque",
            XAmzDate: "animi",
            XAmzSecurityToken: "exercitationem",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "ut",
        },
        Request: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "hic",
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