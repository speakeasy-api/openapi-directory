<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddNotificationChannelRequest(
    request_body=operations.AddNotificationChannelRequestBody(
        config=operations.AddNotificationChannelRequestBodyConfig(
            filters=shared.NotificationFilterConfig(
                message_types=[
                    "NEW_ASSOCIATION",
                    "SEVERITY_UPGRADED",
                    "NEW_RECOMMENDATION",
                ],
                severities=[
                    "HIGH",
                    "MEDIUM",
                    "HIGH",
                ],
            ),
            sns=shared.SnsChannelConfig(
                topic_arn="vel",
            ),
        ),
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
)
    
res = s.add_notification_channel(req)

if res.add_notification_channel_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->