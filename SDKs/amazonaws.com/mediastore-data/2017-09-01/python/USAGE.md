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
    
req = operations.DeleteObjectRequest(
    path_params=operations.DeleteObjectPathParams(
        path="quibusdam",
    ),
    headers=operations.DeleteObjectHeaders(
        x_amz_algorithm="nihil",
        x_amz_content_sha256="sint",
        x_amz_credential="dolorem",
        x_amz_date="porro",
        x_amz_security_token="nemo",
        x_amz_signature="ut",
        x_amz_signed_headers="ut",
    ),
)
    
res = s.delete_object(req)

if res.delete_object_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->