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

    req := operations.GetMediaRequest{
        RequestBody: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: "corrupti",
                ContinuationToken: "provident",
                StartSelectorType: "EARLIEST",
                StartTimestamp: "2021-03-11T23:22:42.658Z",
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