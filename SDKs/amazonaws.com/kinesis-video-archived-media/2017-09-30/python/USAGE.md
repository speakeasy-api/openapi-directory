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
    
req = operations.GetClipRequest(
    headers=operations.GetClipHeaders(
        x_amz_algorithm="ut",
        x_amz_content_sha256="optio",
        x_amz_credential="ut",
        x_amz_date="velit",
        x_amz_security_token="velit",
        x_amz_signature="totam",
        x_amz_signed_headers="doloribus",
    ),
    request=operations.GetClipRequestBody(
        clip_fragment_selector=operations.GetClipRequestBodyClipFragmentSelector(
            fragment_selector_type="PRODUCER_TIMESTAMP",
            timestamp_range=shared.ClipTimestampRange(
                end_timestamp="1995-01-21T20:44:43Z",
                start_timestamp="1979-10-28T05:11:44Z",
            ),
        ),
        stream_arn="quae",
        stream_name="soluta",
    ),
)
    
res = s.get_clip(req)

if res.get_clip_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->