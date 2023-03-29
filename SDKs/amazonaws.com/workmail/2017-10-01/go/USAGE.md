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

    req := operations.AssociateDelegateToResourceRequest{
        Headers: operations.AssociateDelegateToResourceHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "WorkMailService.AssociateDelegateToResource",
        },
        Request: shared.AssociateDelegateToResourceRequest{
            EntityID: "nihil",
            OrganizationID: "fuga",
            ResourceID: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateDelegateToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->