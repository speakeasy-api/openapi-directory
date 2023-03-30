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

    req := operations.AssociateUserRequest{
        Headers: operations.AssociateUserHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateUserRequestBody{
            Domain: "illum",
            IdentityProvider: operations.AssociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: "vel",
                },
            },
            InstanceID: "error",
            Username: "Luna.Hoppe",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateUser(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateUserResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->