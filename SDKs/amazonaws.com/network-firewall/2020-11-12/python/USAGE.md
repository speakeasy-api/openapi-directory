<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateFirewallPolicyRequest(
    associate_firewall_policy_request=shared.AssociateFirewallPolicyRequest(
        firewall_arn="corrupti",
        firewall_name="provident",
        firewall_policy_arn="distinctio",
        update_token="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="NetworkFirewall_20201112.AssociateFirewallPolicy",
)
    
res = s.associate_firewall_policy(req)

if res.associate_firewall_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->