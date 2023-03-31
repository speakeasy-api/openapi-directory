<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AllocateStaticIPRequest(
    allocate_static_ip_request=shared.AllocateStaticIPRequest(
        static_ip_name="corrupti",
    ),
    x_amz_algorithm="provident",
    x_amz_content_sha256="distinctio",
    x_amz_credential="quibusdam",
    x_amz_date="unde",
    x_amz_security_token="nulla",
    x_amz_signature="corrupti",
    x_amz_signed_headers="illum",
    x_amz_target="Lightsail_20161128.AllocateStaticIp",
)
    
res = s.allocate_static_ip(req)

if res.allocate_static_ip_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->