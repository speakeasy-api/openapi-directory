<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateParticipantTokenRequest(
    request_body=operations.CreateParticipantTokenRequestBody(
        attributes={
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        capabilities=[
            "PUBLISH",
            "SUBSCRIBE",
            "SUBSCRIBE",
            "PUBLISH",
        ],
        duration=437587,
        stage_arn="magnam",
        user_id="debitis",
    ),
    x_amz_algorithm="ipsa",
    x_amz_content_sha256="delectus",
    x_amz_credential="tempora",
    x_amz_date="suscipit",
    x_amz_security_token="molestiae",
    x_amz_signature="minus",
    x_amz_signed_headers="placeat",
)
    
res = s.create_participant_token(req)

if res.create_participant_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->