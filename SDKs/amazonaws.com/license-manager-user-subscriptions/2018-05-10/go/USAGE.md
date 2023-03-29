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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateUserRequestBody{
            Domain: "nulla",
            IdentityProvider: operations.AssociateUserRequestBodyIdentityProvider{
                ActiveDirectoryIdentityProvider: &shared.ActiveDirectoryIdentityProvider{
                    DirectoryID: "nihil",
                },
            },
            InstanceID: "fuga",
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