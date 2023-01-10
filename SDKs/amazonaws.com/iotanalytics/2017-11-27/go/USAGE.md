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
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "cumque",
            XAmzCredential: "ea",
            XAmzDate: "earum",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "explicabo",
            XAmzSignedHeaders: "id",
        },
        Request: operations.BatchPutMessageRequestBody{
            ChannelName: "aperiam",
            Messages: []shared.Message{
                shared.Message{
                    MessageID: "dolores",
                    Payload: "cum",
                },
                shared.Message{
                    MessageID: "consequuntur",
                    Payload: "vero",
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