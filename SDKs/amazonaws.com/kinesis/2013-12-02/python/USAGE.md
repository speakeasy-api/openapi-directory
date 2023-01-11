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
    
req = operations.AddTagsToStreamRequest(
    headers=operations.AddTagsToStreamHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="magni",
        x_amz_credential="architecto",
        x_amz_date="est",
        x_amz_security_token="consectetur",
        x_amz_signature="dolores",
        x_amz_signed_headers="in",
        x_amz_target="Kinesis_20131202.AddTagsToStream",
    ),
    request=shared.AddTagsToStreamInput(
        stream_name="possimus",
        tags={
            "animi": "nesciunt",
        },
    ),
)
    
res = s.add_tags_to_stream(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->