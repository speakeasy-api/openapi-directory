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
    
req = operations.AssociateFleetRequest(
    headers=operations.AssociateFleetHeaders(
        x_amz_algorithm="sapiente",
        x_amz_content_sha256="ipsam",
        x_amz_credential="autem",
        x_amz_date="placeat",
        x_amz_security_token="velit",
        x_amz_signature="minus",
        x_amz_signed_headers="praesentium",
        x_amz_target="PhotonAdminProxyService.AssociateFleet",
    ),
    request=shared.AssociateFleetRequest(
        fleet_name="voluptas",
        stack_name="consequatur",
    ),
)
    
res = s.associate_fleet(req)

if res.associate_fleet_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->