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

    req := operations.GetRawMessageContentRequest{
        XAmzAlgorithm: "corrupti",
        XAmzContentSha256: "provident",
        XAmzCredential: "distinctio",
        XAmzDate: "quibusdam",
        XAmzSecurityToken: "unde",
        XAmzSignature: "nulla",
        XAmzSignedHeaders: "corrupti",
        MessageID: "illum",
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