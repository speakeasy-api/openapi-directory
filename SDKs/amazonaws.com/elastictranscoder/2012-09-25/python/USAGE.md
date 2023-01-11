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
    path_params=operations.CancelJobPathParams(
        id="est",
    ),
    headers=operations.CancelJobHeaders(
        x_amz_algorithm="at",
        x_amz_content_sha256="harum",
        x_amz_credential="magnam",
        x_amz_date="earum",
        x_amz_security_token="qui",
        x_amz_signature="vel",
        x_amz_signed_headers="odio",
    ),
)
    
res = s.cancel_job(req)

if res.cancel_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->