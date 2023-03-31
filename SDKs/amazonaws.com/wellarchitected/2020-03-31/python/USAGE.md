<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateLensesRequest(
    request_body=operations.AssociateLensesRequestBody(
        lens_aliases=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    workload_id="unde",
    x_amz_algorithm="nulla",
    x_amz_content_sha256="corrupti",
    x_amz_credential="illum",
    x_amz_date="vel",
    x_amz_security_token="error",
    x_amz_signature="deserunt",
    x_amz_signed_headers="suscipit",
)
    
res = s.associate_lenses(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->