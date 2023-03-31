<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetFieldRequest(
    request_body=operations.BatchGetFieldRequestBody(
        fields_=[
            shared.FieldIdentifier(
                id="provident",
            ),
            shared.FieldIdentifier(
                id="distinctio",
            ),
            shared.FieldIdentifier(
                id="quibusdam",
            ),
        ],
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    domain_id="suscipit",
)
    
res = s.batch_get_field(req)

if res.batch_get_field_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->