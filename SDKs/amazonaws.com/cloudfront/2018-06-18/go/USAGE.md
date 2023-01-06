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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20180618Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20180618Headers{
            XAmzAlgorithm: "sed",
            XAmzContentSha256: "praesentium",
            XAmzCredential: "excepturi",
            XAmzDate: "aut",
            XAmzSecurityToken: "architecto",
            XAmzSignature: "omnis",
            XAmzSignedHeaders: "ut",
        },
        Request: []byte("sunt"),
    }
    
    res, err := s.CreateCloudFrontOriginAccessIdentity20180618(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->