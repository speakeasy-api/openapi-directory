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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20171030Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20171030Headers{
            XAmzAlgorithm: "quo",
            XAmzContentSha256: "delectus",
            XAmzCredential: "et",
            XAmzDate: "ipsum",
            XAmzSecurityToken: "et",
            XAmzSignature: "quis",
            XAmzSignedHeaders: "et",
        },
        Request: []byte("cupiditate"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20171030(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->