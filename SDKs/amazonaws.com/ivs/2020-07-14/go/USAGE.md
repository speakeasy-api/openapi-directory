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

    req := operations.BatchGetChannelRequest{
        Headers: operations.BatchGetChannelHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchGetChannelRequestBody{
            Arns: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
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