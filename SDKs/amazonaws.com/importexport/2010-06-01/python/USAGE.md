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
    
req = operations.GetCancelJobRequest(
    query_params=operations.GetCancelJobQueryParams(
        api_version="amet",
        aws_access_key_id="et",
        action="CancelJob",
        job_id="voluptatem",
        operation="CancelJob",
        signature="natus",
        signature_method="quasi",
        signature_version="et",
        timestamp="quod",
        version="2010-06-01",
    ),
)
    
res = s.get_cancel_job(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->