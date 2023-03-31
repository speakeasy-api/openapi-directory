<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddTagsToStreamRequest(
    add_tags_to_stream_input=shared.AddTagsToStreamInput(
        stream_arn="corrupti",
        stream_name="provident",
        tags={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
    x_amz_target="Kinesis_20131202.AddTagsToStream",
)
    
res = s.add_tags_to_stream(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->