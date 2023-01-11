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
    
req = operations.AddTagsRequest(
    headers=operations.AddTagsHeaders(
        x_amz_algorithm="est",
        x_amz_content_sha256="aut",
        x_amz_credential="dignissimos",
        x_amz_date="et",
        x_amz_security_token="alias",
        x_amz_signature="vitae",
        x_amz_signed_headers="ipsum",
        x_amz_target="com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
    ),
    request=shared.AddTagsRequest(
        resource_id="magni",
        tags_list=[
            shared.Tag(
                key="ea",
                value="dolor",
            ),
            shared.Tag(
                key="consequatur",
                value="assumenda",
            ),
        ],
    ),
)
    
res = s.add_tags(req)

if res.add_tags_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->