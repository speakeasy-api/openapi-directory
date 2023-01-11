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
        x_amz_algorithm="dolorem",
        x_amz_content_sha256="facere",
        x_amz_credential="magnam",
        x_amz_date="aut",
        x_amz_security_token="eum",
        x_amz_signature="facilis",
        x_amz_signed_headers="perferendis",
        x_amz_target="AmazonML_20141212.AddTags",
    ),
    request=shared.AddTagsInput(
        resource_id="ut",
        resource_type="MLModel",
        tags=[
            shared.Tag(
                key="ut",
                value="ut",
            ),
        ],
    ),
)
    
res = s.add_tags(req)

if res.add_tags_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->