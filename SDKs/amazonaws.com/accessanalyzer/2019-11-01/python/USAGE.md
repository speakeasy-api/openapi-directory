<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ApplyArchiveRuleRequest(
    request_body=operations.ApplyArchiveRuleRequestBody(
        analyzer_arn="corrupti",
        client_token="provident",
        rule_name="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
)
    
res = s.apply_archive_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->