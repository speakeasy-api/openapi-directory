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
    
req = operations.AcknowledgeJobRequest(
    headers=operations.AcknowledgeJobHeaders(
        x_amz_algorithm="qui",
        x_amz_content_sha256="numquam",
        x_amz_credential="et",
        x_amz_date="ut",
        x_amz_security_token="soluta",
        x_amz_signature="minima",
        x_amz_signed_headers="fugit",
        x_amz_target="CodePipeline_20150709.AcknowledgeJob",
    ),
    request=shared.AcknowledgeJobInput(
        job_id="et",
        nonce="autem",
    ),
)
    
res = s.acknowledge_job(req)

if res.acknowledge_job_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->