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
    
req = operations.AddTagsToOnPremisesInstancesRequest(
    headers=operations.AddTagsToOnPremisesInstancesHeaders(
        x_amz_algorithm="deserunt",
        x_amz_content_sha256="sed",
        x_amz_credential="sint",
        x_amz_date="est",
        x_amz_security_token="est",
        x_amz_signature="omnis",
        x_amz_signed_headers="reiciendis",
        x_amz_target="CodeDeploy_20141006.AddTagsToOnPremisesInstances",
    ),
    request=shared.AddTagsToOnPremisesInstancesInput(
        instance_names=[
            "et",
            "molestias",
            "minus",
        ],
        tags=[
            shared.Tag(
                key="voluptatum",
                value="tenetur",
            ),
            shared.Tag(
                key="rem",
                value="autem",
            ),
            shared.Tag(
                key="enim",
                value="quia",
            ),
        ],
    ),
)
    
res = s.add_tags_to_on_premises_instances(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->