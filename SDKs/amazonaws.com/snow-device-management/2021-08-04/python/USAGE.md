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
    
req = operations.CancelTaskRequest(
    path_params=operations.CancelTaskPathParams(
        task_id="itaque",
    ),
    headers=operations.CancelTaskHeaders(
        x_amz_algorithm="nobis",
        x_amz_content_sha256="sequi",
        x_amz_credential="esse",
        x_amz_date="nobis",
        x_amz_security_token="sint",
        x_amz_signature="et",
        x_amz_signed_headers="sequi",
    ),
)
    
res = s.cancel_task(req)

if res.cancel_task_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->