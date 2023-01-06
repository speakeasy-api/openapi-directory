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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20161125Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20161125Headers{
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "mollitia",
            XAmzCredential: "velit",
            XAmzDate: "illum",
            XAmzSecurityToken: "eum",
            XAmzSignature: "quo",
            XAmzSignedHeaders: "et",
        },
        Request: []byte("non"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20161125(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->