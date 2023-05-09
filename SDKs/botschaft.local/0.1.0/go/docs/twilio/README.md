# Twilio

### Available Operations

* [TwilioMessageGetTwilioGet](#twiliomessagegettwilioget) - Twilio Message Get
* [TwilioMessagePostTwilioPost](#twiliomessageposttwiliopost) - Twilio Message Post

## TwilioMessageGetTwilioGet

Twilio Message Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Twilio.TwilioMessageGetTwilioGet(ctx, operations.TwilioMessageGetTwilioGetRequest{
        Authorization: sdk.String("ab"),
        Base64Message: sdk.String("quis"),
        Message: sdk.String("veritatis"),
        To: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwilioMessageGetTwilioGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## TwilioMessagePostTwilioPost

Twilio Message Post

### Example Usage

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Twilio.TwilioMessagePostTwilioPost(ctx, operations.TwilioMessagePostTwilioPostRequest{
        TwilioMessageRequest: shared.TwilioMessageRequest{
            Base64Message: sdk.String("perferendis"),
            Message: sdk.String("ipsam"),
            To: "repellendus",
        },
        Authorization: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TwilioMessagePostTwilioPost200ApplicationJSONAny != nil {
        // handle response
    }
}
```
