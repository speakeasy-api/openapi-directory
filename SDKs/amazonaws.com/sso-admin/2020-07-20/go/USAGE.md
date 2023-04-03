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

    req := operations.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
        AttachCustomerManagedPolicyReferenceToPermissionSetRequest: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "corrupti",
                Path: "provident",
            },
            InstanceArn: "distinctio",
            PermissionSetArn: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
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