<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateDevicePoolRequest(
    create_device_pool_request=shared.CreateDevicePoolRequest(
        description="corrupti",
        max_devices=592845,
        name="distinctio",
        project_arn="quibusdam",
        rules=[
            shared.Rule(
                attribute="MODEL",
                operator="GREATER_THAN_OR_EQUALS",
                value="illum",
            ),
            shared.Rule(
                attribute="REMOTE_DEBUG_ENABLED",
                operator="GREATER_THAN_OR_EQUALS",
                value="deserunt",
            ),
            shared.Rule(
                attribute="REMOTE_ACCESS_ENABLED",
                operator="GREATER_THAN",
                value="magnam",
            ),
        ],
    ),
    x_amz_algorithm="debitis",
    x_amz_content_sha256="ipsa",
    x_amz_credential="delectus",
    x_amz_date="tempora",
    x_amz_security_token="suscipit",
    x_amz_signature="molestiae",
    x_amz_signed_headers="minus",
    x_amz_target="DeviceFarm_20150623.CreateDevicePool",
)
    
res = s.create_device_pool(req)

if res.create_device_pool_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->