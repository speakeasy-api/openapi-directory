<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateNotificationRuleRequest(
    request_body=operations.CreateNotificationRuleRequestBody(
        client_request_token="corrupti",
        detail_type="FULL",
        event_type_ids=[
            "quibusdam",
            "unde",
            "nulla",
        ],
        name="corrupti",
        resource="illum",
        status="ENABLED",
        tags={
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        targets=[
            shared.Target(
                target_address="tempora",
                target_type="suscipit",
            ),
            shared.Target(
                target_address="molestiae",
                target_type="minus",
            ),
            shared.Target(
                target_address="placeat",
                target_type="voluptatum",
            ),
            shared.Target(
                target_address="iusto",
                target_type="excepturi",
            ),
        ],
    ),
    x_amz_algorithm="nisi",
    x_amz_content_sha256="recusandae",
    x_amz_credential="temporibus",
    x_amz_date="ab",
    x_amz_security_token="quis",
    x_amz_signature="veritatis",
    x_amz_signed_headers="deserunt",
)
    
res = s.create_notification_rule(req)

if res.create_notification_rule_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->