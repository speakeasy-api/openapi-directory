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
    
req = operations.CancelQuantumTaskRequest(
    path_params=operations.CancelQuantumTaskPathParams(
        quantum_task_arn="quia",
    ),
    headers=operations.CancelQuantumTaskHeaders(
        x_amz_algorithm="ab",
        x_amz_content_sha256="nemo",
        x_amz_credential="eveniet",
        x_amz_date="id",
        x_amz_security_token="placeat",
        x_amz_signature="error",
        x_amz_signed_headers="odio",
    ),
    request=operations.CancelQuantumTaskRequestBody(
        client_token="qui",
    ),
)
    
res = s.cancel_quantum_task(req)

if res.cancel_quantum_task_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->