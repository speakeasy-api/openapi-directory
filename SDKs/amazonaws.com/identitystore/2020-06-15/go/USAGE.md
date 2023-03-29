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

    req := operations.CreateGroupRequest{
        Headers: operations.CreateGroupHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSIdentityStore.CreateGroup",
        },
        Request: shared.CreateGroupRequest{
            Description: "nihil",
            DisplayName: "fuga",
            IdentityStoreID: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.CreateGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroupResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->