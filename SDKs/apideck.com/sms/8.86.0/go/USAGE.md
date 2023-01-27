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
            Raw: false,
        },
        Headers: operations.MessagesAddHeaders{
            XApideckAppID: "voluptas",
            XApideckConsumerID: "culpa",
            XApideckServiceID: "expedita",
        },
        Request: shared.MessageInput{
            Body: "consequuntur",
            From: "dolor",
            MessagingServiceID: "expedita",
            Reference: "voluptas",
            ScheduledAt: "2011-08-12T10:11:12Z",
            Subject: "nihil",
            To: "rerum",
            Type: "mms",
            WebhookURL: "debitis",
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