<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ListRealtimeContactAnalysisSegmentsRequest(
    max_results="corrupti",
    next_token="provident",
    request_body=operations.ListRealtimeContactAnalysisSegmentsRequestBody(
        contact_id="distinctio",
        instance_id="quibusdam",
        max_results=602763,
        next_token="nulla",
    ),
    x_amz_algorithm="corrupti",
    x_amz_content_sha256="illum",
    x_amz_credential="vel",
    x_amz_date="error",
    x_amz_security_token="deserunt",
    x_amz_signature="suscipit",
    x_amz_signed_headers="iure",
)
    
res = s.list_realtime_contact_analysis_segments(req)

if res.list_realtime_contact_analysis_segments_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->