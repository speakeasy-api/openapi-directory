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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20170325Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20170325Headers{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "tempora",
            XAmzCredential: "aliquid",
            XAmzDate: "molestiae",
            XAmzSecurityToken: "fugit",
            XAmzSignature: "quam",
            XAmzSignedHeaders: "cum",
        },
        Request: []byte("a"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20170325(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->