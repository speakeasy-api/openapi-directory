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
    
    req := operations.GetEntitlementsRequest{
        Headers: operations.GetEntitlementsHeaders{
            XAmzAlgorithm: "fugit",
            XAmzContentSha256: "cumque",
            XAmzCredential: "corporis",
            XAmzDate: "adipisci",
            XAmzSecurityToken: "aliquid",
            XAmzSignature: "accusantium",
            XAmzSignedHeaders: "exercitationem",
            XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
        },
        Request: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "perspiciatis": []string{
                    "inventore",
                    "voluptatem",
                },
            },
            MaxResults: 2441923158078746440,
            NextToken: "ut",
            ProductCode: "ullam",
        },
    }
    
    res, err := s.GetEntitlements(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitlementsResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->