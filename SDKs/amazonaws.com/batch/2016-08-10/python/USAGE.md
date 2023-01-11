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
    
req = operations.CancelJobRequest(
    headers=operations.CancelJobHeaders(
        x_amz_algorithm="beatae",
        x_amz_content_sha256="tempore",
        x_amz_credential="reprehenderit",
        x_amz_date="nostrum",
        x_amz_security_token="velit",
        x_amz_signature="necessitatibus",
        x_amz_signed_headers="illo",
    ),
    request=operations.CancelJobRequestBody(
        job_id="aut",
        reason="quis",
    ),
)
    
res = s.cancel_job(req)

if res.cancel_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->