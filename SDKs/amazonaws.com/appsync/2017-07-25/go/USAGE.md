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
            APIID: "aut",
        },
        Headers: operations.CreateAPICacheHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "qui",
            XAmzCredential: "atque",
            XAmzDate: "praesentium",
            XAmzSecurityToken: "perferendis",
            XAmzSignature: "ab",
            XAmzSignedHeaders: "cumque",
        },
        Request: operations.CreateAPICacheRequestBody{
            APICachingBehavior: "FULL_REQUEST_CACHING",
            AtRestEncryptionEnabled: false,
            TransitEncryptionEnabled: true,
            TTL: 1541276666071085218,
            Type: "SMALL",
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