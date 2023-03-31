<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateOriginationIdentityRequest(
    associate_origination_identity_request=shared.AssociateOriginationIdentityRequest(
        client_token="corrupti",
        iso_country_code="provident",
        origination_identity="distinctio",
        pool_id="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="PinpointSMSVoiceV2.AssociateOriginationIdentity",
)
    
res = s.associate_origination_identity(req)

if res.associate_origination_identity_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->