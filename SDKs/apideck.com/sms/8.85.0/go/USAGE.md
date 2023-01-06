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
            XApideckAppID: "ut",
            XApideckConsumerID: "voluptas",
            XApideckServiceID: "atque",
        },
        Request: shared.MessageInput{
            Body: "et",
            From: "nobis",
            MessagingServiceID: "ipsum",
            Reference: "dolor",
            ScheduledAt: "2016-07-06T18:58:32Z",
            Subject: "est",
            To: "id",
            Type: "sms",
            WebhookURL: "fuga",
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