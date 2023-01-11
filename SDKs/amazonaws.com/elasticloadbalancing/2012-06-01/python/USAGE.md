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
    
req = operations.GetApplySecurityGroupsToLoadBalancerRequest(
    query_params=operations.GetApplySecurityGroupsToLoadBalancerQueryParams(
        action="ApplySecurityGroupsToLoadBalancer",
        load_balancer_name="molestias",
        security_groups=[
            "fugiat",
            "cumque",
            "ad",
        ],
        version="2012-06-01",
    ),
    headers=operations.GetApplySecurityGroupsToLoadBalancerHeaders(
        x_amz_algorithm="officiis",
        x_amz_content_sha256="sit",
        x_amz_credential="atque",
        x_amz_date="ad",
        x_amz_security_token="ab",
        x_amz_signature="dolores",
        x_amz_signed_headers="delectus",
    ),
)
    
res = s.get_apply_security_groups_to_load_balancer(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->