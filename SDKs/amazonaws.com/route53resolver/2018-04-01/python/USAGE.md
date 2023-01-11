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
    
req = operations.AssociateFirewallRuleGroupRequest(
    headers=operations.AssociateFirewallRuleGroupHeaders(
        x_amz_algorithm="ut",
        x_amz_content_sha256="non",
        x_amz_credential="nulla",
        x_amz_date="numquam",
        x_amz_security_token="quia",
        x_amz_signature="fugiat",
        x_amz_signed_headers="laboriosam",
        x_amz_target="Route53Resolver.AssociateFirewallRuleGroup",
    ),
    request=shared.AssociateFirewallRuleGroupRequest(
        creator_request_id="nam",
        firewall_rule_group_id="delectus",
        mutation_protection="ENABLED",
        name="incidunt",
        priority=7383927136453695366,
        tags=[
            shared.Tag(
                key="iste",
                value="fuga",
            ),
        ],
        vpc_id="at",
    ),
)
    
res = s.associate_firewall_rule_group(req)

if res.associate_firewall_rule_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->