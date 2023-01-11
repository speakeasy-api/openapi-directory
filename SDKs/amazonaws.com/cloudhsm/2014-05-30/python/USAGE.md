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
        x_amz_algorithm="nihil",
        x_amz_content_sha256="magni",
        x_amz_credential="vitae",
        x_amz_date="excepturi",
        x_amz_security_token="ut",
        x_amz_signature="totam",
        x_amz_signed_headers="blanditiis",
        x_amz_target="CloudHsmFrontendService.AddTagsToResource",
    ),
    request=shared.AddTagsToResourceRequest(
        resource_arn="sint",
        tag_list=[
            shared.Tag(
                key="fugiat",
                value="adipisci",
            ),
        ],
    ),
)
    
res = s.add_tags_to_resource(req)

if res.add_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->