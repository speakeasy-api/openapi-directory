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
    
req = operations.CloneBackendRequest(
    path_params=operations.CloneBackendPathParams(
        app_id="laboriosam",
        backend_environment_name="velit",
    ),
    headers=operations.CloneBackendHeaders(
        x_amz_algorithm="ea",
        x_amz_content_sha256="tempore",
        x_amz_credential="fugit",
        x_amz_date="aut",
        x_amz_security_token="tempora",
        x_amz_signature="aliquid",
        x_amz_signed_headers="mollitia",
    ),
    request=operations.CloneBackendRequestBody(
        target_environment_name="non",
    ),
)
    
res = s.clone_backend(req)

if res.clone_backend_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->