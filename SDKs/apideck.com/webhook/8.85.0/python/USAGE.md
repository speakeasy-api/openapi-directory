<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.WebhooksAddRequest(
    security=operations.WebhooksAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    headers=operations.WebhooksAddHeaders(
        x_apideck_app_id="rerum",
    ),
    request=shared.CreateWebhookRequest(
        delivery_url="placeat",
        description="doloremque",
        events=[
            "accounting.customer.updated",
            "lead.lead.updated",
            "pos.item.deleted",
        ],
        status="disabled",
        unified_api="file-storage",
    ),
)
    
res = s.webhooks.webhooks_add(req)

if res.create_webhook_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->