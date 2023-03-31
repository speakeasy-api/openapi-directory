<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateApplicationFleetRequest(
    associate_application_fleet_request=shared.AssociateApplicationFleetRequest(
        application_arn="corrupti",
        fleet_name="provident",
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="PhotonAdminProxyService.AssociateApplicationFleet",
)
    
res = s.associate_application_fleet(req)

if res.associate_application_fleet_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->