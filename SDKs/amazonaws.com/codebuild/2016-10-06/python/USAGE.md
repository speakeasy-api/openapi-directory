<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchDeleteBuildsRequest(
    batch_delete_builds_input=shared.BatchDeleteBuildsInput(
        ids=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="CodeBuild_20161006.BatchDeleteBuilds",
)
    
res = s.batch_delete_builds(req)

if res.batch_delete_builds_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->