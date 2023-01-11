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
    
req = operations.ListRealtimeContactAnalysisSegmentsRequest(
    query_params=operations.ListRealtimeContactAnalysisSegmentsQueryParams(
        max_results="error",
        next_token="odit",
    ),
    headers=operations.ListRealtimeContactAnalysisSegmentsHeaders(
        x_amz_algorithm="repudiandae",
        x_amz_content_sha256="pariatur",
        x_amz_credential="est",
        x_amz_date="at",
        x_amz_security_token="consequuntur",
        x_amz_signature="libero",
        x_amz_signed_headers="aperiam",
    ),
    request=operations.ListRealtimeContactAnalysisSegmentsRequestBody(
        contact_id="voluptatem",
        instance_id="sunt",
        max_results=5474918243671586608,
        next_token="quaerat",
    ),
)
    
res = s.list_realtime_contact_analysis_segments(req)

if res.list_realtime_contact_analysis_segments_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->