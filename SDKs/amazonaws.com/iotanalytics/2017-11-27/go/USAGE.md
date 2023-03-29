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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.BatchPutMessageRequestBody{
            ChannelName: "nulla",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "fuga",
                    Payload: "facilis",
                },
                shared.Message{
                    MessageID: "eum",
                    Payload: "iusto",
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