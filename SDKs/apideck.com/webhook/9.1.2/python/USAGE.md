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