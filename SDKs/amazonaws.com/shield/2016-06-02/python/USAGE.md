<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateDRTLogBucketRequest(
    associate_drt_log_bucket_request=shared.AssociateDRTLogBucketRequest(
        log_bucket="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="AWSShield_20160616.AssociateDRTLogBucket",
)
    
res = s.associate_drt_log_bucket(req)

if res.associate_drt_log_bucket_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->