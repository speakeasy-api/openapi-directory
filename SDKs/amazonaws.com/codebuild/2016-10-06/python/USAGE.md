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
    
req = operations.BatchDeleteBuildsRequest(
    headers=operations.BatchDeleteBuildsHeaders(
        x_amz_algorithm="occaecati",
        x_amz_content_sha256="veniam",
        x_amz_credential="sed",
        x_amz_date="sint",
        x_amz_security_token="laudantium",
        x_amz_signature="explicabo",
        x_amz_signed_headers="maiores",
        x_amz_target="CodeBuild_20161006.BatchDeleteBuilds",
    ),
    request=shared.BatchDeleteBuildsInput(
        ids=[
            "explicabo",
        ],
    ),
)
    
res = s.batch_delete_builds(req)

if res.batch_delete_builds_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->