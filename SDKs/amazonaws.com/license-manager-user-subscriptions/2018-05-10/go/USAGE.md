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

    req := operations.AssociateUserRequest{
        RequestBody: operations.AssociateUserRequestBody{
            Domain: "corrupti",
            IdentityProvider: operations.AssociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: "provident",
                },
            },
            InstanceID: "distinctio",
            Username: "Rosalinda_Mitchell84",
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
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