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
    
    req := operations.CreateAPICacheRequest{
        PathParams: operations.CreateAPICachePathParams{
            APIID: "sit",
        },
        Headers: operations.CreateAPICacheHeaders{
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.CreateAPICacheRequestBody{
            APICachingBehavior: "FULL_REQUEST_CACHING",
            AtRestEncryptionEnabled: false,
            TransitEncryptionEnabled: true,
            TTL: 8325060299420976708,
            Type: "LARGE_12X",
        },
    }
    
    res, err := s.CreateAPICache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAPICacheResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->