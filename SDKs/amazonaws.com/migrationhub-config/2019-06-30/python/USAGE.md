<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CreateHomeRegionControlRequest(
    create_home_region_control_request=shared.CreateHomeRegionControlRequest(
        dry_run=False,
        home_region="corrupti",
        target=shared.Target(
            id="provident",
            type="ACCOUNT",
        ),
    ),
    x_amz_algorithm="distinctio",
    x_amz_content_sha256="quibusdam",
    x_amz_credential="unde",
    x_amz_date="nulla",
    x_amz_security_token="corrupti",
    x_amz_signature="illum",
    x_amz_signed_headers="vel",
    x_amz_target="AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
)
    
res = s.create_home_region_control(req)

if res.create_home_region_control_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->