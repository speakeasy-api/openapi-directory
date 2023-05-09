<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchPutMessage(ctx, operations.BatchPutMessageRequest{
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
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->