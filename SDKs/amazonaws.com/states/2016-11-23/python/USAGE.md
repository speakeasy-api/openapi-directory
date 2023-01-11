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
    
req = operations.CreateActivityRequest(
    headers=operations.CreateActivityHeaders(
        x_amz_algorithm="laboriosam",
        x_amz_content_sha256="totam",
        x_amz_credential="atque",
        x_amz_date="corrupti",
        x_amz_security_token="quibusdam",
        x_amz_signature="dolorum",
        x_amz_signed_headers="placeat",
        x_amz_target="AWSStepFunctions.CreateActivity",
    ),
    request=shared.CreateActivityInput(
        name="laborum",
        tags=[
            shared.Tag(
                key="numquam",
                value="et",
            ),
        ],
    ),
)
    
res = s.create_activity(req)

if res.create_activity_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->