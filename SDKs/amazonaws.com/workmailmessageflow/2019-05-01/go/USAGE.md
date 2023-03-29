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

    req := operations.GetRawMessageContentRequest{
        PathParams: operations.GetRawMessageContentPathParams{
            MessageID: "unde",
        },
        Headers: operations.GetRawMessageContentHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.GetRawMessageContent(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetRawMessageContentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->