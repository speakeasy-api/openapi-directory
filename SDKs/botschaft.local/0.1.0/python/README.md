# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/botschaft.local/0.1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ConfigConfigGetRequest(
    authorization="corrupti",
)
    
res = s.config_config_get(req)

if res.config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `config_config_get` - Config
* `topic_topic_topic_name_get` - Topic

### discord

* `discord_get_discord_get` - Discord Get
* `discord_post_discord_post` - Discord Post

### slack

* `slack_get_slack_get` - Slack Get
* `slack_post_slack_post` - Slack Post

### sns

* `sns_get_sns_get` - Sns Get
* `sns_post_sns_post` - Sns Post

### twilio

* `twilio_message_get_twilio_get` - Twilio Message Get
* `twilio_message_post_twilio_post` - Twilio Message Post
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
