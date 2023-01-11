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
    
req = operations.CloseTunnelRequest(
    headers=operations.CloseTunnelHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="est",
        x_amz_credential="consequatur",
        x_amz_date="quia",
        x_amz_security_token="ad",
        x_amz_signature="nemo",
        x_amz_signed_headers="quia",
        x_amz_target="IoTSecuredTunneling.CloseTunnel",
    ),
    request=shared.CloseTunnelRequest(
        delete=True,
        tunnel_id="dolores",
    ),
)
    
res = s.close_tunnel(req)

if res.close_tunnel_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->