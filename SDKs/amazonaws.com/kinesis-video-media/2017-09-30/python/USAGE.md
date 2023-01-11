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
    
req = operations.GetMediaRequest(
    headers=operations.GetMediaHeaders(
        x_amz_algorithm="corporis",
        x_amz_content_sha256="at",
        x_amz_credential="nostrum",
        x_amz_date="recusandae",
        x_amz_security_token="iste",
        x_amz_signature="at",
        x_amz_signed_headers="qui",
    ),
    request=operations.GetMediaRequestBody(
        start_selector=operations.GetMediaRequestBodyStartSelector(
            after_fragment_number="fugit",
            continuation_token="repellat",
            start_selector_type="PRODUCER_TIMESTAMP",
            start_timestamp="2002-04-24T14:41:47Z",
        ),
        stream_arn="omnis",
        stream_name="magni",
    ),
)
    
res = s.get_media(req)

if res.get_media_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->