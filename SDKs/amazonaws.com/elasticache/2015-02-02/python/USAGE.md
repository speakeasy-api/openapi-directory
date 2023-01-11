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
    
req = operations.GetAuthorizeCacheSecurityGroupIngressRequest(
    query_params=operations.GetAuthorizeCacheSecurityGroupIngressQueryParams(
        action="AuthorizeCacheSecurityGroupIngress",
        cache_security_group_name="labore",
        ec2_security_group_name="id",
        ec2_security_group_owner_id="libero",
        version="2015-02-02",
    ),
    headers=operations.GetAuthorizeCacheSecurityGroupIngressHeaders(
        x_amz_algorithm="amet",
        x_amz_content_sha256="sint",
        x_amz_credential="nostrum",
        x_amz_date="voluptatem",
        x_amz_security_token="tempore",
        x_amz_signature="est",
        x_amz_signed_headers="molestias",
    ),
)
    
res = s.get_authorize_cache_security_group_ingress(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->