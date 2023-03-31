<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETAuthorizeCacheSecurityGroupIngressRequest(
    action="AuthorizeCacheSecurityGroupIngress",
    cache_security_group_name="corrupti",
    ec2_security_group_name="provident",
    ec2_security_group_owner_id="distinctio",
    version="2015-02-02",
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
)
    
res = s.get_authorize_cache_security_group_ingress(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->