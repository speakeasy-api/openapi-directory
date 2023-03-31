<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AddAssociationRequest(
    add_association_request=shared.AddAssociationRequest(
        association_type="DerivedFrom",
        destination_arn="provident",
        source_arn="distinctio",
    ),
    x_amz_algorithm="quibusdam",
    x_amz_content_sha256="unde",
    x_amz_credential="nulla",
    x_amz_date="corrupti",
    x_amz_security_token="illum",
    x_amz_signature="vel",
    x_amz_signed_headers="error",
    x_amz_target="SageMaker.AddAssociation",
)
    
res = s.add_association(req)

if res.add_association_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->