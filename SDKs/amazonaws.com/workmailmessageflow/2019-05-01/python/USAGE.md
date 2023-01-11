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
    
req = operations.GetRawMessageContentRequest(
    path_params=operations.GetRawMessageContentPathParams(
        message_id="quibusdam",
    ),
    headers=operations.GetRawMessageContentHeaders(
        x_amz_algorithm="vero",
        x_amz_content_sha256="ea",
        x_amz_credential="doloremque",
        x_amz_date="maxime",
        x_amz_security_token="aperiam",
        x_amz_signature="ut",
        x_amz_signed_headers="illum",
    ),
)
    
res = s.get_raw_message_content(req)

if res.get_raw_message_content_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->