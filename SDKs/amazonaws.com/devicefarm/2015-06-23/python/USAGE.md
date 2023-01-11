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
    
req = operations.CreateDevicePoolRequest(
    headers=operations.CreateDevicePoolHeaders(
        x_amz_algorithm="aperiam",
        x_amz_content_sha256="est",
        x_amz_credential="ab",
        x_amz_date="molestias",
        x_amz_security_token="molestias",
        x_amz_signature="voluptas",
        x_amz_signed_headers="animi",
        x_amz_target="DeviceFarm_20150623.CreateDevicePool",
    ),
    request=shared.CreateDevicePoolRequest(
        description="nihil",
        max_devices=5987901294680041728,
        name="hic",
        project_arn="vitae",
        rules=[
            shared.Rule(
                attribute="FLEET_TYPE",
                operator="EQUALS",
                value="pariatur",
            ),
            shared.Rule(
                attribute="INSTANCE_ARN",
                operator="GREATER_THAN_OR_EQUALS",
                value="architecto",
            ),
            shared.Rule(
                attribute="INSTANCE_LABELS",
                operator="LESS_THAN",
                value="rem",
            ),
        ],
    ),
)
    
res = s.create_device_pool(req)

if res.create_device_pool_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->