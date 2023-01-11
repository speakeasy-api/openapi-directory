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
    
req = operations.CopyBackupToRegionRequest(
    headers=operations.CopyBackupToRegionHeaders(
        x_amz_algorithm="sunt",
        x_amz_content_sha256="asperiores",
        x_amz_credential="reprehenderit",
        x_amz_date="consectetur",
        x_amz_security_token="sequi",
        x_amz_signature="reprehenderit",
        x_amz_signed_headers="qui",
        x_amz_target="BaldrApiService.CopyBackupToRegion",
    ),
    request=shared.CopyBackupToRegionRequest(
        backup_id="enim",
        destination_region="sint",
        tag_list=[
            shared.Tag(
                key="rem",
                value="aliquid",
            ),
            shared.Tag(
                key="quo",
                value="quo",
            ),
        ],
    ),
)
    
res = s.copy_backup_to_region(req)

if res.copy_backup_to_region_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->