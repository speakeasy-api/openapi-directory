<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddTagsRequest(
    add_tags_request=shared.AddTagsRequest(
        resource_id="corrupti",
        tags_list=[
            shared.Tag(
                key="distinctio",
                value="quibusdam",
            ),
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
        ],
    ),
    x_amz_algorithm="vel",
    x_amz_content_sha256="error",
    x_amz_credential="deserunt",
    x_amz_date="suscipit",
    x_amz_security_token="iure",
    x_amz_signature="magnam",
    x_amz_signed_headers="debitis",
    x_amz_target="com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
)
    
res = s.add_tags(req)

if res.add_tags_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->