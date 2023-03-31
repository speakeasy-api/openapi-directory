<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetSchemaRequest(
    request_body=operations.BatchGetSchemaRequestBody(
        names=[
            "provident",
            "distinctio",
            "quibusdam",
        ],
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    collaboration_identifier="suscipit",
)
    
res = s.batch_get_schema(req)

if res.batch_get_schema_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->