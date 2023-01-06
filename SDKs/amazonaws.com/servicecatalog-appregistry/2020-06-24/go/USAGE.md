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
    
    req := operations.AssociateAttributeGroupRequest{
        PathParams: operations.AssociateAttributeGroupPathParams{
            Application: "assumenda",
            AttributeGroup: "iusto",
        },
        Headers: operations.AssociateAttributeGroupHeaders{
            XAmzAlgorithm: "distinctio",
            XAmzContentSha256: "ut",
            XAmzCredential: "ut",
            XAmzDate: "expedita",
            XAmzSecurityToken: "repellendus",
            XAmzSignature: "commodi",
            XAmzSignedHeaders: "exercitationem",
        },
    }
    
    res, err := s.AssociateAttributeGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAttributeGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->