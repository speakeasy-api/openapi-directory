<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.ConvertRecoveryPointToSnapshotRequest(
    convert_recovery_point_to_snapshot_request=shared.ConvertRecoveryPointToSnapshotRequest(
        recovery_point_id="corrupti",
        retention_period=592845,
        snapshot_name="distinctio",
        tags=[
            shared.Tag(
                key="unde",
                value="nulla",
            ),
            shared.Tag(
                key="corrupti",
                value="illum",
            ),
            shared.Tag(
                key="vel",
                value="error",
            ),
            shared.Tag(
                key="deserunt",
                value="suscipit",
            ),
        ],
    ),
    x_amz_algorithm="iure",
    x_amz_content_sha256="magnam",
    x_amz_credential="debitis",
    x_amz_date="ipsa",
    x_amz_security_token="delectus",
    x_amz_signature="tempora",
    x_amz_signed_headers="suscipit",
    x_amz_target="RedshiftServerless.ConvertRecoveryPointToSnapshot",
)
    
res = s.convert_recovery_point_to_snapshot(req)

if res.convert_recovery_point_to_snapshot_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->