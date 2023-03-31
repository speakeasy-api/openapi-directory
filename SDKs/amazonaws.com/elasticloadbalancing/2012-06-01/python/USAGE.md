<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GETApplySecurityGroupsToLoadBalancerRequest(
    action="ApplySecurityGroupsToLoadBalancer",
    load_balancer_name="corrupti",
    security_groups=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
    version="2012-06-01",
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.get_apply_security_groups_to_load_balancer(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->