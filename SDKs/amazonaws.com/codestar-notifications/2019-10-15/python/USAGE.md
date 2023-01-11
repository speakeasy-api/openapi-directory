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
    
req = operations.CreateNotificationRuleRequest(
    headers=operations.CreateNotificationRuleHeaders(
        x_amz_algorithm="labore",
        x_amz_content_sha256="est",
        x_amz_credential="quod",
        x_amz_date="et",
        x_amz_security_token="sit",
        x_amz_signature="quo",
        x_amz_signed_headers="omnis",
    ),
    request=operations.CreateNotificationRuleRequestBody(
        client_request_token="reprehenderit",
        detail_type="BASIC",
        event_type_ids=[
            "veniam",
        ],
        name="impedit",
        resource="ex",
        status="DISABLED",
        tags={
            "sunt": "incidunt",
            "sed": "repellendus",
            "error": "nostrum",
        },
        targets=[
            shared.Target(
                target_address="nihil",
                target_type="ipsa",
            ),
            shared.Target(
                target_address="nihil",
                target_type="sed",
            ),
            shared.Target(
                target_address="autem",
                target_type="consequatur",
            ),
        ],
    ),
)
    
res = s.create_notification_rule(req)

if res.create_notification_rule_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->