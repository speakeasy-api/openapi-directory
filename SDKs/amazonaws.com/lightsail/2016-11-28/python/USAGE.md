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
    
req = operations.AllocateStaticIPRequest(
    headers=operations.AllocateStaticIPHeaders(
        x_amz_algorithm="excepturi",
        x_amz_content_sha256="quia",
        x_amz_credential="dolore",
        x_amz_date="sapiente",
        x_amz_security_token="voluptas",
        x_amz_signature="quis",
        x_amz_signed_headers="dolor",
        x_amz_target="Lightsail_20161128.AllocateStaticIp",
    ),
    request=shared.AllocateStaticIPRequest(
        static_ip_name="doloremque",
    ),
)
    
res = s.allocate_static_ip(req)

if res.allocate_static_ip_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->