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
            XAmzAlgorithm: "non",
            XAmzContentSha256: "nam",
            XAmzCredential: "beatae",
            XAmzDate: "quae",
            XAmzSecurityToken: "qui",
            XAmzSignature: "magni",
            XAmzSignedHeaders: "minus",
            XAmzTarget: "AWSMPEntitlementService.GetEntitlements",
        },
        Request: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "neque": []string{
                    "quia",
                },
                "repudiandae": []string{
                    "autem",
                },
            },
            MaxResults: 2350280920086746644,
            NextToken: "enim",
            ProductCode: "ut",
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