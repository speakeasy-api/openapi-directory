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
    
req = operations.MessagesAddRequest(
    security=operations.MessagesAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.MessagesAddQueryParams(
        raw=True,
    ),
    headers=operations.MessagesAddHeaders(
        x_apideck_app_id="et",
        x_apideck_consumer_id="error",
        x_apideck_service_id="vero",
    ),
    request=shared.MessageInput(
        body="sit",
        from_="maxime",
        messaging_service_id="est",
        reference="natus",
        scheduled_at="1979-01-06T21:57:55Z",
        subject="saepe",
        to="dolorem",
        type="mms",
        webhook_url="recusandae",
    ),
)
    
res = s.messages.messages_add(req)

if res.create_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->