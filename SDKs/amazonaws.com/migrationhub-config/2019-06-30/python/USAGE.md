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
    
req = operations.CreateHomeRegionControlRequest(
    headers=operations.CreateHomeRegionControlHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="deleniti",
        x_amz_credential="laudantium",
        x_amz_date="fuga",
        x_amz_security_token="doloribus",
        x_amz_signature="quasi",
        x_amz_signed_headers="et",
        x_amz_target="AWSMigrationHubMultiAccountService.CreateHomeRegionControl",
    ),
    request=shared.CreateHomeRegionControlRequest(
        dry_run=False,
        home_region="doloremque",
        target=shared.Target(
            id="minus",
            type="ACCOUNT",
        ),
    ),
)
    
res = s.create_home_region_control(req)

if res.create_home_region_control_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->