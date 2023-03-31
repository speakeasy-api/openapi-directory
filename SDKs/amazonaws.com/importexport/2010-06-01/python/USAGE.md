<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETCancelJobRequest(
    api_version="corrupti",
    aws_access_key_id="provident",
    action="CancelJob",
    job_id="distinctio",
    operation="CancelJob",
    signature="quibusdam",
    signature_method="unde",
    signature_version="nulla",
    timestamp="corrupti",
    version="2010-06-01",
)
    
res = s.get_cancel_job(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->