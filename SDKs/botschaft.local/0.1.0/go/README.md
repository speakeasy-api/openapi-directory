# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/botschaft.local/0.1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.ConfigConfigGet(ctx, operations.ConfigConfigGetRequest{
        Authorization: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Config != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ConfigConfigGet](docs/sdk/README.md#configconfigget) - Config
* [TopicTopicTopicNameGet](docs/sdk/README.md#topictopictopicnameget) - Topic

### [Discord](docs/discord/README.md)

* [DiscordGetDiscordGet](docs/discord/README.md#discordgetdiscordget) - Discord Get
* [DiscordPostDiscordPost](docs/discord/README.md#discordpostdiscordpost) - Discord Post

### [Slack](docs/slack/README.md)

* [SlackGetSlackGet](docs/slack/README.md#slackgetslackget) - Slack Get
* [SlackPostSlackPost](docs/slack/README.md#slackpostslackpost) - Slack Post

### [Sns](docs/sns/README.md)

* [SnsGetSnsGet](docs/sns/README.md#snsgetsnsget) - Sns Get
* [SnsPostSnsPost](docs/sns/README.md#snspostsnspost) - Sns Post

### [Twilio](docs/twilio/README.md)

* [TwilioMessageGetTwilioGet](docs/twilio/README.md#twiliomessagegettwilioget) - Twilio Message Get
* [TwilioMessagePostTwilioPost](docs/twilio/README.md#twiliomessageposttwiliopost) - Twilio Message Post
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
