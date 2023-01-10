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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20181105Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20181105Headers{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "odio",
            XAmzCredential: "voluptate",
            XAmzDate: "velit",
            XAmzSecurityToken: "commodi",
            XAmzSignature: "iste",
            XAmzSignedHeaders: "vero",
        },
        Request: []byte("blanditiis"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20181105(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->