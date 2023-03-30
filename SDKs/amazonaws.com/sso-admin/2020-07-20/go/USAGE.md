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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
        },
        Request: shared.AttachCustomerManagedPolicyReferenceToPermissionSetRequest{
            CustomerManagedPolicyReference: shared.CustomerManagedPolicyReference{
                Name: "illum",
                Path: "vel",
            },
            InstanceArn: "error",
            PermissionSetArn: "deserunt",
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