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

    req := operations.BatchPutMessageRequest{
        RequestBody: operations.BatchPutMessageRequestBody{
            ChannelName: "corrupti",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "distinctio",
                    Payload: "quibusdam",
                },
                shared.Message{
                    MessageID: "unde",
                    Payload: "nulla",
                },
                shared.Message{
                    MessageID: "corrupti",
                    Payload: "illum",
                },
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
    }

    ctx := context.Background()
    res, err := s.BatchPutMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->