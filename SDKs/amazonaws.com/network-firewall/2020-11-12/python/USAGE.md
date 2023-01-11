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
    
req = operations.AssociateFirewallPolicyRequest(
    headers=operations.AssociateFirewallPolicyHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="et",
        x_amz_credential="et",
        x_amz_date="a",
        x_amz_security_token="quis",
        x_amz_signature="est",
        x_amz_signed_headers="dolorum",
        x_amz_target="NetworkFirewall_20201112.AssociateFirewallPolicy",
    ),
    request=shared.AssociateFirewallPolicyRequest(
        firewall_arn="veniam",
        firewall_name="est",
        firewall_policy_arn="blanditiis",
        update_token="aliquid",
    ),
)
    
res = s.associate_firewall_policy(req)

if res.associate_firewall_policy_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->