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
    
req = operations.AddTagsToResourceRequest(
    headers=operations.AddTagsToResourceHeaders(
        x_amz_algorithm="laborum",
        x_amz_content_sha256="ex",
        x_amz_credential="ad",
        x_amz_date="voluptatem",
        x_amz_security_token="accusantium",
        x_amz_signature="et",
        x_amz_signed_headers="sunt",
        x_amz_target="AmazonDMSv20160101.AddTagsToResource",
    ),
    request=shared.AddTagsToResourceMessage(
        resource_arn="quidem",
        tags=[
            shared.Tag(
                key="iure",
                resource_arn="incidunt",
                value="iusto",
            ),
            shared.Tag(
                key="voluptatibus",
                resource_arn="voluptates",
                value="quia",
            ),
            shared.Tag(
                key="tenetur",
                resource_arn="et",
                value="rerum",
            ),
        ],
    ),
)
    
res = s.add_tags_to_resource(req)

if res.add_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->