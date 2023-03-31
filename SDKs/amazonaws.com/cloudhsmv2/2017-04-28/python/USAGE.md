<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.CopyBackupToRegionRequest(
    copy_backup_to_region_request=shared.CopyBackupToRegionRequest(
        backup_id="corrupti",
        destination_region="provident",
        tag_list=[
            shared.Tag(
                key="quibusdam",
                value="unde",
            ),
            shared.Tag(
                key="nulla",
                value="corrupti",
            ),
            shared.Tag(
                key="illum",
                value="vel",
            ),
        ],
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
    x_amz_target="BaldrApiService.CopyBackupToRegion",
)
    
res = s.copy_backup_to_region(req)

if res.copy_backup_to_region_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->