<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.BatchGetTracesRequest(
    next_token="corrupti",
    request_body=operations.BatchGetTracesRequestBody(
        next_token="provident",
        trace_ids=[
            "quibusdam",
            "unde",
            "nulla",
        ],
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
)
    
res = s.batch_get_traces(req)

if res.batch_get_traces_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->