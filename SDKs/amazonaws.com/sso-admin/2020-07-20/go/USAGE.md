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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "in",
            XAmzCredential: "corporis",
            XAmzDate: "dolores",
            XAmzSecurityToken: "perferendis",
            XAmzSignature: "laboriosam",
            XAmzSignedHeaders: "numquam",
            XAmzTarget: "SWBExternalService.AttachManagedPolicyToPermissionSet",
        },
        Request: shared.AttachManagedPolicyToPermissionSetRequest{
            InstanceArn: "aperiam",
            ManagedPolicyArn: "veniam",
            PermissionSetArn: "velit",
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