<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateFirewallRuleGroupRequest(
    associate_firewall_rule_group_request=shared.AssociateFirewallRuleGroupRequest(
        creator_request_id="corrupti",
        firewall_rule_group_id="provident",
        mutation_protection="DISABLED",
        name="quibusdam",
        priority=602763,
        tags=[
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                value="error",
            ),
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
            shared.Tag(
                key="iure",
                value="magnam",
            ),
        ],
        vpc_id="debitis",
    ),
    x_amz_algorithm="ipsa",
    x_amz_content_sha256="delectus",
    x_amz_credential="tempora",
    x_amz_date="suscipit",
    x_amz_security_token="molestiae",
    x_amz_signature="minus",
    x_amz_signed_headers="placeat",
    x_amz_target="Route53Resolver.AssociateFirewallRuleGroup",
)
    
res = s.associate_firewall_rule_group(req)

if res.associate_firewall_rule_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->