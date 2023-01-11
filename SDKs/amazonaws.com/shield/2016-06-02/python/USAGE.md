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
    
req = operations.AssociateDrtLogBucketRequest(
    headers=operations.AssociateDrtLogBucketHeaders(
        x_amz_algorithm="tempora",
        x_amz_content_sha256="quas",
        x_amz_credential="exercitationem",
        x_amz_date="tempore",
        x_amz_security_token="et",
        x_amz_signature="qui",
        x_amz_signed_headers="magnam",
        x_amz_target="AWSShield_20160616.AssociateDRTLogBucket",
    ),
    request=shared.AssociateDrtLogBucketRequest(
        log_bucket="sequi",
    ),
)
    
res = s.associate_drt_log_bucket(req)

if res.associate_drt_log_bucket_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->