<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateCreatedArtifactRequest(
    associate_created_artifact_request=shared.AssociateCreatedArtifactRequest(
        created_artifact=shared.CreatedArtifact(
            description="corrupti",
            name="provident",
        ),
        dry_run=False,
        migration_task_name="distinctio",
        progress_update_stream="quibusdam",
    ),
    x_amz_algorithm="unde",
    x_amz_content_sha256="nulla",
    x_amz_credential="corrupti",
    x_amz_date="illum",
    x_amz_security_token="vel",
    x_amz_signature="error",
    x_amz_signed_headers="deserunt",
    x_amz_target="AWSMigrationHub.AssociateCreatedArtifact",
)
    
res = s.associate_created_artifact(req)

if res.associate_created_artifact_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->