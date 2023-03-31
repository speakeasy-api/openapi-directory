<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddTagsToResourceRequest(
    add_tags_to_resource_request=shared.AddTagsToResourceRequest(
        resource_arn="corrupti",
        tag_list=[
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
    x_amz_target="CloudHsmFrontendService.AddTagsToResource",
)
    
res = s.add_tags_to_resource(req)

if res.add_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->