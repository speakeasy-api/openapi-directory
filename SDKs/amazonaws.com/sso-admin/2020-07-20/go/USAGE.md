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

    req := operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
        Headers: operations.AttachCustomerManagedPolicyReferenceToPermissionSetHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
        },
        Request: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "nihil",
                Path: "fuga",
            },
            InstanceArn: "facilis",
            PermissionSetArn: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.AttachCustomerManagedPolicyReferenceToPermissionSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachCustomerManagedPolicyReferenceToPermissionSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->