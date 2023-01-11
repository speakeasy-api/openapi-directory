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
    
req = operations.AddNotificationChannelsRequest(
    path_params=operations.AddNotificationChannelsPathParams(
        profiling_group_name="deleniti",
    ),
    headers=operations.AddNotificationChannelsHeaders(
        x_amz_algorithm="corporis",
        x_amz_content_sha256="voluptas",
        x_amz_credential="architecto",
        x_amz_date="et",
        x_amz_security_token="eum",
        x_amz_signature="vero",
        x_amz_signed_headers="totam",
    ),
    request=operations.AddNotificationChannelsRequestBody(
        channels=[
            shared.Channel(
                event_publishers=[
                    "AnomalyDetection",
                    "AnomalyDetection",
                ],
                id="explicabo",
                uri="consequatur",
            ),
        ],
    ),
)
    
res = s.add_notification_channels(req)

if res.add_notification_channels_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->