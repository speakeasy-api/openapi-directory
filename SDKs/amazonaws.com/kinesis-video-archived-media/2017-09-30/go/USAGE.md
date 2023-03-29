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

    req := operations.GetClipRequest{
        Headers: operations.GetClipHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.GetClipRequestBody{
            ClipFragmentSelector: operations.GetClipRequestBodyClipFragmentSelector{
                FragmentSelectorType: "SERVER_TIMESTAMP",
                TimestampRange: &shared.ClipTimestampRange{
                    EndTimestamp: "2022-10-25T21:18:53.728Z",
                    StartTimestamp: "2022-08-13T22:06:46.870Z",
                },
            },
            StreamARN: "facilis",
            StreamName: "eum",
        },
    }

    ctx := context.Background()
    res, err := s.GetClip(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetClipOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->