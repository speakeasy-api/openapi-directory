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
    
    req := operations.AttachManagedPolicyToPermissionSetRequest{
        Headers: operations.AttachManagedPolicyToPermissionSetHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "SWBExternalService.AttachManagedPolicyToPermissionSet",
        },
        Request: shared.AttachManagedPolicyToPermissionSetRequest{
            InstanceArn: "fugit",
            ManagedPolicyArn: "et",
            PermissionSetArn: "nihil",
        },
    }
    
    res, err := s.AttachManagedPolicyToPermissionSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachManagedPolicyToPermissionSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->