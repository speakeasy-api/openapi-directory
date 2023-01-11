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
    
req = operations.GetCloneReceiptRuleSetRequest(
    query_params=operations.GetCloneReceiptRuleSetQueryParams(
        action="CloneReceiptRuleSet",
        original_rule_set_name="in",
        rule_set_name="dolorem",
        version="2010-12-01",
    ),
    headers=operations.GetCloneReceiptRuleSetHeaders(
        x_amz_algorithm="sint",
        x_amz_content_sha256="non",
        x_amz_credential="qui",
        x_amz_date="debitis",
        x_amz_security_token="in",
        x_amz_signature="dolore",
        x_amz_signed_headers="quas",
    ),
)
    
res = s.get_clone_receipt_rule_set(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->