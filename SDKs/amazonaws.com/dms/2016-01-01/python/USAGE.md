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
    add_tags_to_resource_message=shared.AddTagsToResourceMessage(
        resource_arn="corrupti",
        tags=[
            shared.Tag(
                key="distinctio",
                resource_arn="quibusdam",
                value="unde",
            ),
            shared.Tag(
                key="nulla",
                resource_arn="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                resource_arn="error",
                value="deserunt",
            ),
        ],
    ),
    x_amz_algorithm="suscipit",
    x_amz_content_sha256="iure",
    x_amz_credential="magnam",
    x_amz_date="debitis",
    x_amz_security_token="ipsa",
    x_amz_signature="delectus",
    x_amz_signed_headers="tempora",
    x_amz_target="AmazonDMSv20160101.AddTagsToResource",
)
    
res = s.add_tags_to_resource(req)

if res.add_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->