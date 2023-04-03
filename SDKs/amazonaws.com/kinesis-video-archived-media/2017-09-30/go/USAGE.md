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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetClipRequest{
        RequestBody: operations.GetClipRequestBody{
            ClipFragmentSelector: operations.GetClipRequestBodyClipFragmentSelector{
                FragmentSelectorType: "SERVER_TIMESTAMP",
                TimestampRange: &shared.ClipTimestampRange{
                    EndTimestamp: "2021-07-27T21:52:56.087Z",
                    StartTimestamp: "2021-03-11T23:22:42.658Z",
                },
            },
            StreamARN: "nulla",
            StreamName: "corrupti",
        },
        XAmzAlgorithm: "illum",
        XAmzContentSha256: "vel",
        XAmzCredential: "error",
        XAmzDate: "deserunt",
        XAmzSecurityToken: "suscipit",
        XAmzSignature: "iure",
        XAmzSignedHeaders: "magnam",
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