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
    
req = operations.AssociateCreatedArtifactRequest(
    headers=operations.AssociateCreatedArtifactHeaders(
        x_amz_algorithm="vel",
        x_amz_content_sha256="vel",
        x_amz_credential="placeat",
        x_amz_date="qui",
        x_amz_security_token="nisi",
        x_amz_signature="quis",
        x_amz_signed_headers="adipisci",
        x_amz_target="AWSMigrationHub.AssociateCreatedArtifact",
    ),
    request=shared.AssociateCreatedArtifactRequest(
        created_artifact=shared.CreatedArtifact(
            description="rerum",
            name="et",
        ),
        dry_run=True,
        migration_task_name="numquam",
        progress_update_stream="laborum",
    ),
)
    
res = s.associate_created_artifact(req)

if res.associate_created_artifact_result is not None:
    # handle response
```
<!-- End SDK Example Usage -->