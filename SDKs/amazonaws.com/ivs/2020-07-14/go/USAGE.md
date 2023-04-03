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

    req := operations.BatchGetChannelRequest{
        RequestBody: operations.BatchGetChannelRequestBody{
            Arns: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
    }

    ctx := context.Background()
    res, err := s.BatchGetChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetChannelResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->