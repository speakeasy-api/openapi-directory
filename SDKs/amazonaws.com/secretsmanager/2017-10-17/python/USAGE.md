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
    
req = operations.CancelRotateSecretRequest(
    headers=operations.CancelRotateSecretHeaders(
        x_amz_algorithm="dolorem",
        x_amz_content_sha256="magni",
        x_amz_credential="sequi",
        x_amz_date="non",
        x_amz_security_token="a",
        x_amz_signature="recusandae",
        x_amz_signed_headers="molestias",
        x_amz_target="secretsmanager.CancelRotateSecret",
    ),
    request=shared.CancelRotateSecretRequest(
        secret_id="dolores",
    ),
)
    
res = s.cancel_rotate_secret(req)

if res.cancel_rotate_secret_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->