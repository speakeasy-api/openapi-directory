<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchPutMessageRequest(
    request_body=operations.BatchPutMessageRequestBody(
        channel_name="corrupti",
        messages=[
            shared.Message(
                message_id="distinctio",
                payload="quibusdam",
            ),
            shared.Message(
                message_id="unde",
                payload="nulla",
            ),
            shared.Message(
                message_id="corrupti",
                payload="illum",
            ),
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
)
    
res = s.batch_put_message(req)

if res.batch_put_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->