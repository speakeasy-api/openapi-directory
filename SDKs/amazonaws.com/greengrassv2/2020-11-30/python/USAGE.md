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
    
req = operations.BatchAssociateClientDeviceWithCoreDeviceRequest(
    path_params=operations.BatchAssociateClientDeviceWithCoreDevicePathParams(
        core_device_thing_name="libero",
    ),
    headers=operations.BatchAssociateClientDeviceWithCoreDeviceHeaders(
        x_amz_algorithm="saepe",
        x_amz_content_sha256="et",
        x_amz_credential="corporis",
        x_amz_date="a",
        x_amz_security_token="illum",
        x_amz_signature="numquam",
        x_amz_signed_headers="dolores",
    ),
    request=operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody(
        entries=[
            shared.AssociateClientDeviceWithCoreDeviceEntry(
                thing_name="voluptatibus",
            ),
            shared.AssociateClientDeviceWithCoreDeviceEntry(
                thing_name="sint",
            ),
            shared.AssociateClientDeviceWithCoreDeviceEntry(
                thing_name="expedita",
            ),
        ],
    ),
)
    
res = s.batch_associate_client_device_with_core_device(req)

if res.batch_associate_client_device_with_core_device_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->