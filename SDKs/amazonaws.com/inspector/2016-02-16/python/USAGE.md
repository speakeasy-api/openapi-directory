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
    
req = operations.AddAttributesToFindingsRequest(
    headers=operations.AddAttributesToFindingsHeaders(
        x_amz_algorithm="quod",
        x_amz_content_sha256="impedit",
        x_amz_credential="nostrum",
        x_amz_date="repudiandae",
        x_amz_security_token="dicta",
        x_amz_signature="vero",
        x_amz_signed_headers="ea",
        x_amz_target="InspectorService.AddAttributesToFindings",
    ),
    request=shared.AddAttributesToFindingsRequest(
        attributes=[
            shared.Attribute(
                key="deleniti",
                value="omnis",
            ),
            shared.Attribute(
                key="eius",
                value="consequuntur",
            ),
        ],
        finding_arns=[
            "laudantium",
            "similique",
            "ullam",
        ],
    ),
)
    
res = s.add_attributes_to_findings(req)

if res.add_attributes_to_findings_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->