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
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "pariatur",
            XAmzCredential: "eligendi",
            XAmzDate: "sit",
            XAmzSecurityToken: "libero",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "ipsa",
            XAmzTarget: "SWBExternalService.AttachManagedPolicyToPermissionSet",
        },
        Request: shared.AttachManagedPolicyToPermissionSetRequest{
            InstanceArn: "quis",
            ManagedPolicyArn: "necessitatibus",
            PermissionSetArn: "sint",
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