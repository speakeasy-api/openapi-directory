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
    
req = operations.AssociateDelegateToResourceRequest(
    headers=operations.AssociateDelegateToResourceHeaders(
        x_amz_algorithm="voluptates",
        x_amz_content_sha256="non",
        x_amz_credential="nam",
        x_amz_date="enim",
        x_amz_security_token="enim",
        x_amz_signature="assumenda",
        x_amz_signed_headers="quo",
        x_amz_target="WorkMailService.AssociateDelegateToResource",
    ),
    request=shared.AssociateDelegateToResourceRequest(
        entity_id="quis",
        organization_id="esse",
        resource_id="voluptate",
    ),
)
    
res = s.associate_delegate_to_resource(req)

if res.associate_delegate_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->