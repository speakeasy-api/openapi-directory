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
    
    req := operations.AssociateWebACLRequest{
        Headers: operations.AssociateWebACLHeaders{
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "modi",
            XAmzCredential: "consequatur",
            XAmzDate: "quia",
            XAmzSecurityToken: "eaque",
            XAmzSignature: "et",
            XAmzSignedHeaders: "assumenda",
            XAmzTarget: "AWSWAF_Regional_20161128.AssociateWebACL",
        },
        Request: shared.AssociateWebACLRequest{
            ResourceArn: "perspiciatis",
            WebACLID: "quia",
        },
    }
    
    res, err := s.AssociateWebACL(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateWebACLResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->