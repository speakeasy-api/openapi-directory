<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetClipRequest(
    request_body=operations.GetClipRequestBody(
        clip_fragment_selector=operations.GetClipRequestBodyClipFragmentSelector(
            fragment_selector_type="SERVER_TIMESTAMP",
            timestamp_range=shared.ClipTimestampRange(
                end_timestamp="2021-07-27T21:52:56.087Z",
                start_timestamp="2021-03-11T23:22:42.658Z",
            ),
        ),
        stream_arn="nulla",
        stream_name="corrupti",
    ),
    x_amz_algorithm="illum",
    x_amz_content_sha256="vel",
    x_amz_credential="error",
    x_amz_date="deserunt",
    x_amz_security_token="suscipit",
    x_amz_signature="iure",
    x_amz_signed_headers="magnam",
)
    
res = s.get_clip(req)

if res.get_clip_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->