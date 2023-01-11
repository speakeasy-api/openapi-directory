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
    
req = operations.ApplyArchiveRuleRequest(
    headers=operations.ApplyArchiveRuleHeaders(
        x_amz_algorithm="rerum",
        x_amz_content_sha256="ut",
        x_amz_credential="laborum",
        x_amz_date="fugit",
        x_amz_security_token="quis",
        x_amz_signature="minus",
        x_amz_signed_headers="soluta",
    ),
    request=operations.ApplyArchiveRuleRequestBody(
        analyzer_arn="aperiam",
        client_token="consequuntur",
        rule_name="excepturi",
    ),
)
    
res = s.apply_archive_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->