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