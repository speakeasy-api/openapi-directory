<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetMediaRequest(
    request_body=operations.GetMediaRequestBody(
        start_selector=operations.GetMediaRequestBodyStartSelector(
            after_fragment_number="corrupti",
            continuation_token="provident",
            start_selector_type="EARLIEST",
            start_timestamp="2021-03-11T23:22:42.658Z",
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
    
res = s.get_media(req)

if res.get_media_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->