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
    
req = operations.AssociateAttributeGroupRequest(
    path_params=operations.AssociateAttributeGroupPathParams(
        application="quasi",
        attribute_group="eos",
    ),
    headers=operations.AssociateAttributeGroupHeaders(
        x_amz_algorithm="nesciunt",
        x_amz_content_sha256="neque",
        x_amz_credential="quos",
        x_amz_date="et",
        x_amz_security_token="magni",
        x_amz_signature="nemo",
        x_amz_signed_headers="ad",
    ),
)
    
res = s.associate_attribute_group(req)

if res.associate_attribute_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->