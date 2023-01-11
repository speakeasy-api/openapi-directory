<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AddNotificationChannelRequest(
    headers=operations.AddNotificationChannelHeaders(
        x_amz_algorithm="aut",
        x_amz_content_sha256="voluptate",
        x_amz_credential="a",
        x_amz_date="consequatur",
        x_amz_security_token="dolore",
        x_amz_signature="assumenda",
        x_amz_signed_headers="rerum",
    ),
    request=operations.AddNotificationChannelRequestBody(
        config=operations.AddNotificationChannelRequestBodyConfig(
            sns=shared.SnsChannelConfig(
                topic_arn="non",
            ),
        ),
    ),
)
    
res = s.add_notification_channel(req)

if res.add_notification_channel_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->