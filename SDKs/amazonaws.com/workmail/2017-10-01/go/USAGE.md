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
    
    req := operations.AssociateDelegateToResourceRequest{
        Headers: operations.AssociateDelegateToResourceHeaders{
            XAmzAlgorithm: "velit",
            XAmzContentSha256: "explicabo",
            XAmzCredential: "qui",
            XAmzDate: "maiores",
            XAmzSecurityToken: "debitis",
            XAmzSignature: "molestiae",
            XAmzSignedHeaders: "voluptas",
            XAmzTarget: "WorkMailService.AssociateDelegateToResource",
        },
        Request: shared.AssociateDelegateToResourceRequest{
            EntityID: "cupiditate",
            OrganizationID: "in",
            ResourceID: "molestiae",
        },
    }
    
    res, err := s.AssociateDelegateToResource(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDelegateToResourceResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->