<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.BatchPutMessageRequest{
        Headers: operations.BatchPutMessageHeaders{
            XAmzAlgorithm: "maiores",
            XAmzContentSha256: "error",
            XAmzCredential: "eius",
            XAmzDate: "dolorem",
            XAmzSecurityToken: "ratione",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "excepturi",
        },
        Request: operations.BatchPutMessageRequestBody{
            ChannelName: "voluptates",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "est",
                    Payload: "vel",
                },
            },
        },
    }
    
    res, err := s.BatchPutMessage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->