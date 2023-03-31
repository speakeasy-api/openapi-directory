<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AcknowledgeJobRequest(
    acknowledge_job_input=shared.AcknowledgeJobInput(
        job_id="corrupti",
        nonce="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="CodePipeline_20150709.AcknowledgeJob",
)
    
res = s.acknowledge_job(req)

if res.acknowledge_job_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->