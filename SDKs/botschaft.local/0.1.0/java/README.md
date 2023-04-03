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
            }}            

            ConfigConfigGetResponse res = sdk.configConfigGet(req);

            if (res.config.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `configConfigGet` - Config
* `topicTopicTopicNameGet` - Topic

### discord

* `discordGetDiscordGet` - Discord Get
* `discordPostDiscordPost` - Discord Post

### slack

* `slackGetSlackGet` - Slack Get
* `slackPostSlackPost` - Slack Post

### sns

* `snsGetSnsGet` - Sns Get
* `snsPostSnsPost` - Sns Post

### twilio

* `twilioMessageGetTwilioGet` - Twilio Message Get
* `twilioMessagePostTwilioPost` - Twilio Message Post
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
