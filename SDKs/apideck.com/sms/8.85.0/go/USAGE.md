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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.MessagesAddRequest{
        Security: operations.MessagesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.MessagesAddQueryParams{
            Raw: true,
        },
        Headers: operations.MessagesAddHeaders{
            XApideckAppID: "et",
            XApideckConsumerID: "error",
            XApideckServiceID: "vero",
        },
        Request: shared.MessageInput{
            Body: "sit",
            From: "maxime",
            MessagingServiceID: "est",
            Reference: "natus",
            ScheduledAt: "1979-01-06T21:57:55Z",
            Subject: "saepe",
            To: "dolorem",
            Type: "mms",
            WebhookURL: "recusandae",
        },
    }
    
    res, err := s.Messages.MessagesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateMessageResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->