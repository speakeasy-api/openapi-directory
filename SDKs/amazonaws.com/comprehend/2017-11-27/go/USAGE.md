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
    
    req := operations.BatchDetectDominantLanguageRequest{
        Headers: operations.BatchDetectDominantLanguageHeaders{
            XAmzAlgorithm: "tempora",
            XAmzContentSha256: "illum",
            XAmzCredential: "quae",
            XAmzDate: "aut",
            XAmzSecurityToken: "consectetur",
            XAmzSignature: "voluptatibus",
            XAmzSignedHeaders: "doloremque",
            XAmzTarget: "Comprehend_20171127.BatchDetectDominantLanguage",
        },
        Request: shared.BatchDetectDominantLanguageRequest{
            TextList: []string{
                "iste",
            },
        },
    }
    
    res, err := s.BatchDetectDominantLanguage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectDominantLanguageResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->