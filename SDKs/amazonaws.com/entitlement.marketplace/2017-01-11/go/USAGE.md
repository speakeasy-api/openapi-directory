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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
        },
        Request: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "et": []string{
                    "rerum",
                },
            },
            MaxResults: 7837839688282259259,
            NextToken: "debitis",
            ProductCode: "voluptatum",
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