# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/sms/9.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MessagesAddRequest(
    message_input=shared.MessageInput(
        body="Hi! How are you doing?",
        from_="+15017122661",
        messaging_service_id="123456",
        reference="CUST001",
        scheduled_at="2020-09-30T07:43:32.000Z",
        subject="Picture",
        to="+15017122662",
        type="sms",
        webhook_url="https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
    ),
    raw=False,
    x_apideck_app_id="corrupti",
    x_apideck_consumer_id="provident",
    x_apideck_service_id="distinctio",
)
    
res = s.messages.messages_add(req, operations.MessagesAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### messages

* `messages_add` - Create Message
* `messages_all` - List Messages
* `messages_delete` - Delete Message
* `messages_one` - Get Message
* `messages_update` - Update Message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
