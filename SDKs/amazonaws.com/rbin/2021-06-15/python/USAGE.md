<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateRuleRequest(
    request_body=operations.CreateRuleRequestBody(
        description="corrupti",
        lock_configuration=operations.CreateRuleRequestBodyLockConfiguration(
            unlock_delay=shared.UnlockDelay(
                unlock_delay_unit="DAYS",
                unlock_delay_value=592845,
            ),
        ),
        resource_tags=[
            shared.ResourceTag(
                resource_tag_key="quibusdam",
                resource_tag_value="unde",
            ),
            shared.ResourceTag(
                resource_tag_key="nulla",
                resource_tag_value="corrupti",
            ),
            shared.ResourceTag(
                resource_tag_key="illum",
                resource_tag_value="vel",
            ),
        ],
        resource_type="EC2_IMAGE",
        retention_period=operations.CreateRuleRequestBodyRetentionPeriod(
            retention_period_unit="DAYS",
            retention_period_value=645894,
        ),
        tags=[
            shared.Tag(
                key="iure",
                value="magnam",
            ),
            shared.Tag(
                key="debitis",
                value="ipsa",
            ),
        ],
    ),
    x_amz_algorithm="delectus",
    x_amz_content_sha256="tempora",
    x_amz_credential="suscipit",
    x_amz_date="molestiae",
    x_amz_security_token="minus",
    x_amz_signature="placeat",
    x_amz_signed_headers="voluptatum",
)
    
res = s.create_rule(req)

if res.create_rule_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->