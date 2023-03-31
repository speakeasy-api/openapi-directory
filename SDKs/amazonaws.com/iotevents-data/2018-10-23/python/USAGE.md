<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchAcknowledgeAlarmRequest(
    request_body=operations.BatchAcknowledgeAlarmRequestBody(
        acknowledge_action_requests=[
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="provident",
                key_value="distinctio",
                note="quibusdam",
                request_id="unde",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="nulla",
                key_value="corrupti",
                note="illum",
                request_id="vel",
            ),
            shared.AcknowledgeAlarmActionRequest(
                alarm_model_name="error",
                key_value="deserunt",
                note="suscipit",
                request_id="iure",
            ),
        ],
    ),
    x_amz_algorithm="magnam",
    x_amz_content_sha256="debitis",
    x_amz_credential="ipsa",
    x_amz_date="delectus",
    x_amz_security_token="tempora",
    x_amz_signature="suscipit",
    x_amz_signed_headers="molestiae",
)
    
res = s.batch_acknowledge_alarm(req)

if res.batch_acknowledge_alarm_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->