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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20190326Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20190326Headers{
            XAmzAlgorithm: "placeat",
            XAmzContentSha256: "odio",
            XAmzCredential: "autem",
            XAmzDate: "eligendi",
            XAmzSecurityToken: "animi",
            XAmzSignature: "est",
            XAmzSignedHeaders: "voluptas",
        },
        Request: []byte("ea"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20190326(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->