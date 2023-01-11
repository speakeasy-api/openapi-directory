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
    
req = operations.AssociateDeviceWithPlacementRequest(
    path_params=operations.AssociateDeviceWithPlacementPathParams(
        device_template_name="voluptatem",
        placement_name="magnam",
        project_name="recusandae",
    ),
    headers=operations.AssociateDeviceWithPlacementHeaders(
        x_amz_algorithm="quos",
        x_amz_content_sha256="aspernatur",
        x_amz_credential="veniam",
        x_amz_date="minima",
        x_amz_security_token="harum",
        x_amz_signature="et",
        x_amz_signed_headers="alias",
    ),
    request=operations.AssociateDeviceWithPlacementRequestBody(
        device_id="aliquam",
    ),
)
    
res = s.associate_device_with_placement(req)

if res.associate_device_with_placement_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->