<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BatchDetectDominantLanguageRequest{
        Headers: operations.BatchDetectDominantLanguageHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "Comprehend_20171127.BatchDetectDominantLanguage",
        },
        Request: shared.BatchDetectDominantLanguageRequest{
            TextList: []string{
                "fuga",
                "facilis",
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchDetectDominantLanguage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDetectDominantLanguageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->