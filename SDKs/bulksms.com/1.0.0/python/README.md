# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/bulksms.com/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.PreSignRequest(
    file_extension="pdf",
    media_type="application/pdf",
)
    
res = s.attachments.post_rmm_pre_sign_attachment(req, operations.PostRmmPreSignAttachmentSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.pre_sign_info is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attachments

* `post_rmm_pre_sign_attachment` - Upload an attachment via a signed URL

### blocked_numbers

* `get_blocked_numbers` - List blocked numbers
* `post_blocked_numbers` - Create a blocked number

### credits

* `post_credit_transfer` - Transfer credits to another account

### message

* `get_messages` - Retrieve Messages
* `get_messages_send` - Send message by simple GET or POST
* `get_messages_id_` - Show Message
* `get_messages_id_related_received_messages` - List Related Messages
* `post_messages` - Send Messages

### profile

* `get_profile` - Get profile

### webhooks

* `delete_webhooks_id_` - Delete a webhook
* `get_webhooks` - List webhooks
* `get_webhooks_id_` - Read a webhook
* `post_webhooks` - Create a webhook
* `post_webhooks_id_` - Update a webhook
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
