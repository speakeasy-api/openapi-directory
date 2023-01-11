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
    
req = operations.BatchAcknowledgeAlarmRequest(
    headers=operations.BatchAcknowledgeAlarmHeaders(
        x_amz_algorithm="maxime",
        x_amz_content_sha256="quibusdam",
        x_amz_credential="asperiores",
        x_amz_date="provident",
        x_amz_security_token="doloribus",
        x_amz_signature="architecto",
        x_amz_signed_headers="est",
    ),
    request=operations.BatchAcknowledgeAlarmRequestBody(
        acknowledge_action_requests=[
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="odio",
                key_value="blanditiis",
                note="voluptatem",
                request_id="ea",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="eum",
                key_value="at",
                note="fugit",
                request_id="dolore",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="voluptatem",
                key_value="recusandae",
                note="impedit",
                request_id="odio",
            ),
        ],
    ),
)
    
res = s.batch_acknowledge_alarm(req)

if res.batch_acknowledge_alarm_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->