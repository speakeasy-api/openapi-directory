<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.DescribeEntitiesDetectionV2JobRequest(
    describe_entities_detection_v2_job_request=shared.DescribeEntitiesDetectionV2JobRequest(
        job_id="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
)
    
res = s.describe_entities_detection_v2_job(req)

if res.describe_entities_detection_v2_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->