# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/apideck.com/webhook/9.1.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WebhooksAddRequest(
    create_webhook_request=shared.CreateWebhookRequest(
        delivery_url="https://example.com/my/webhook/endpoint",
        description="A description",
        events=[
            "crm.company.created",
            "crm.company.created",
            "crm.company.created",
        ],
        status="enabled",
        unified_api="crm",
    ),
    x_apideck_app_id="provident",
)
    
res = s.webhooks.webhooks_add(req, operations.WebhooksAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_webhook_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### webhooks

* `webhooks_add` - Create webhook subscription
* `webhooks_all` - List webhook subscriptions
* `webhooks_delete` - Delete webhook subscription
* `webhooks_execute` - Execute a webhook
* `webhooks_one` - Get webhook subscription
* `webhooks_resolve` - Resolve and Execute a connection webhook
* `webhooks_short_execute` - Execute a webhook
* `webhooks_update` - Update webhook subscription
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
