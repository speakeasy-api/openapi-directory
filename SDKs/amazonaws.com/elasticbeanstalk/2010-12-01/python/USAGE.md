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
    
req = operations.GetAbortEnvironmentUpdateRequest(
    query_params=operations.GetAbortEnvironmentUpdateQueryParams(
        action="AbortEnvironmentUpdate",
        environment_id="voluptas",
        environment_name="facilis",
        version="2010-12-01",
    ),
    headers=operations.GetAbortEnvironmentUpdateHeaders(
        x_amz_algorithm="sunt",
        x_amz_content_sha256="quis",
        x_amz_credential="qui",
        x_amz_date="aut",
        x_amz_security_token="temporibus",
        x_amz_signature="nemo",
        x_amz_signed_headers="ea",
    ),
)
    
res = s.get_abort_environment_update(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->