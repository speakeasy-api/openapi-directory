# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigConfigGetRequest;
import org.openapis.openapi.models.operations.ConfigConfigGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConfigConfigGetRequest req = new ConfigConfigGetRequest() {{
                authorization = "corrupti";
            }};            

            ConfigConfigGetResponse res = sdk.configConfigGet(req);

            if (res.config != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [configConfigGet](docs/sdk/README.md#configconfigget) - Config
* [topicTopicTopicNameGet](docs/sdk/README.md#topictopictopicnameget) - Topic

### [discord](docs/discord/README.md)

* [discordGetDiscordGet](docs/discord/README.md#discordgetdiscordget) - Discord Get
* [discordPostDiscordPost](docs/discord/README.md#discordpostdiscordpost) - Discord Post

### [slack](docs/slack/README.md)

* [slackGetSlackGet](docs/slack/README.md#slackgetslackget) - Slack Get
* [slackPostSlackPost](docs/slack/README.md#slackpostslackpost) - Slack Post

### [sns](docs/sns/README.md)

* [snsGetSnsGet](docs/sns/README.md#snsgetsnsget) - Sns Get
* [snsPostSnsPost](docs/sns/README.md#snspostsnspost) - Sns Post

### [twilio](docs/twilio/README.md)

* [twilioMessageGetTwilioGet](docs/twilio/README.md#twiliomessagegettwilioget) - Twilio Message Get
* [twilioMessagePostTwilioPost](docs/twilio/README.md#twiliomessageposttwiliopost) - Twilio Message Post
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
