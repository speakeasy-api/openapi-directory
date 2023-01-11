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
    
req = operations.GetIceServerConfigRequest(
    headers=operations.GetIceServerConfigHeaders(
        x_amz_algorithm="nemo",
        x_amz_content_sha256="corporis",
        x_amz_credential="cupiditate",
        x_amz_date="soluta",
        x_amz_security_token="voluptatibus",
        x_amz_signature="maiores",
        x_amz_signed_headers="corrupti",
    ),
    request=operations.GetIceServerConfigRequestBody(
        channel_arn="expedita",
        client_id="nisi",
        service="TURN",
        username="magni",
    ),
)
    
res = s.get_ice_server_config(req)

if res.get_ice_server_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->