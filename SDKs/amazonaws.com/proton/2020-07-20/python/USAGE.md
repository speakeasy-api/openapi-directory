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
    
req = operations.AcceptEnvironmentAccountConnectionRequest(
    headers=operations.AcceptEnvironmentAccountConnectionHeaders(
        x_amz_algorithm="possimus",
        x_amz_content_sha256="ullam",
        x_amz_credential="eveniet",
        x_amz_date="alias",
        x_amz_security_token="tenetur",
        x_amz_signature="dolorem",
        x_amz_signed_headers="porro",
        x_amz_target="AwsProton20200720.AcceptEnvironmentAccountConnection",
    ),
    request=shared.AcceptEnvironmentAccountConnectionInput(
        id="sed",
    ),
)
    
res = s.accept_environment_account_connection(req)

if res.accept_environment_account_connection_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->