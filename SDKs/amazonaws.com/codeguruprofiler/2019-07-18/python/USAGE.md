<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddNotificationChannelsRequest(
    request_body=operations.AddNotificationChannelsRequestBody(
        channels=[
            shared.Channel(
                event_publishers=[
                    "AnomalyDetection",
                    "AnomalyDetection",
                    "AnomalyDetection",
                ],
                id="distinctio",
                uri="https://outstanding-strait.name",
            ),
            shared.Channel(
                event_publishers=[
                    "AnomalyDetection",
                    "AnomalyDetection",
                    "AnomalyDetection",
                    "AnomalyDetection",
                ],
                id="vel",
                uri="https://present-giggle.info",
            ),
            shared.Channel(
                event_publishers=[
                    "AnomalyDetection",
                    "AnomalyDetection",
                ],
                id="debitis",
                uri="http://whirlwind-diver.info",
            ),
        ],
    ),
    x_amz_algorithm="molestiae",
    x_amz_content_sha256="minus",
    x_amz_credential="placeat",
    x_amz_date="voluptatum",
    x_amz_security_token="iusto",
    x_amz_signature="excepturi",
    x_amz_signed_headers="nisi",
    profiling_group_name="recusandae",
)
    
res = s.add_notification_channels(req)

if res.add_notification_channels_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->