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
    
req = operations.CancelImageCreationRequest(
    headers=operations.CancelImageCreationHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="ut",
        x_amz_credential="occaecati",
        x_amz_date="eum",
        x_amz_security_token="ut",
        x_amz_signature="assumenda",
        x_amz_signed_headers="fuga",
    ),
    request=operations.CancelImageCreationRequestBody(
        client_token="aut",
        image_build_version_arn="corrupti",
    ),
)
    
res = s.cancel_image_creation(req)

if res.cancel_image_creation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->