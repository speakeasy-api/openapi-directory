<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateDelegateToResourceRequest(
    associate_delegate_to_resource_request=shared.AssociateDelegateToResourceRequest(
        entity_id="corrupti",
        organization_id="provident",
        resource_id="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="WorkMailService.AssociateDelegateToResource",
)
    
res = s.associate_delegate_to_resource(req)

if res.associate_delegate_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->