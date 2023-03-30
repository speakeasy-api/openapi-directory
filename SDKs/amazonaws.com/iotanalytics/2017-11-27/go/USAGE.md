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

    req := operations.BatchPutMessageRequest{
        Headers: operations.BatchPutMessageHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.BatchPutMessageRequestBody{
            ChannelName: "illum",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "error",
                    Payload: "deserunt",
                },
                shared.Message{
                    MessageID: "suscipit",
                    Payload: "iure",
                },
            },
        },
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