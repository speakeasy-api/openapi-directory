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

    req := operations.GetMediaRequest{
        Headers: operations.GetMediaHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: "nulla",
                ContinuationToken: "nihil",
                StartSelectorType: "NOW",
                StartTimestamp: "2022-08-05T18:29:55.818Z",
            },
            StreamARN: "eum",
            StreamName: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.GetMedia(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMediaOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->