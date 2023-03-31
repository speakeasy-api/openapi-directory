<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetIceServerConfigRequest(
    request_body=operations.GetIceServerConfigRequestBody(
        channel_arn="corrupti",
        client_id="provident",
        service="TURN",
        username="Micheal_Sporer",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
)
    
res = s.get_ice_server_config(req)

if res.get_ice_server_config_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->