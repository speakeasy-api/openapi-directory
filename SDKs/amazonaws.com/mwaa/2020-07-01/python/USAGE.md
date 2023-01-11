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
    
req = operations.CreateCliTokenRequest(
    path_params=operations.CreateCliTokenPathParams(
        name="nostrum",
    ),
    headers=operations.CreateCliTokenHeaders(
        x_amz_algorithm="sed",
        x_amz_content_sha256="qui",
        x_amz_credential="enim",
        x_amz_date="corporis",
        x_amz_security_token="dolorem",
        x_amz_signature="quos",
        x_amz_signed_headers="quibusdam",
    ),
)
    
res = s.create_cli_token(req)

if res.create_cli_token_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->