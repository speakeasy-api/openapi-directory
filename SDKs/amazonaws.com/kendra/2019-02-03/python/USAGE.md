<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        hmac="YOUR_API_KEY_HERE",
    ),
)


req = operations.AssociateEntitiesToExperienceRequest(
    associate_entities_to_experience_request=shared.AssociateEntitiesToExperienceRequest(
        entity_list=[
            shared.EntityConfiguration(
                entity_id="provident",
                entity_type="GROUP",
            ),
            shared.EntityConfiguration(
                entity_id="quibusdam",
                entity_type="GROUP",
            ),
            shared.EntityConfiguration(
                entity_id="nulla",
                entity_type="GROUP",
            ),
        ],
        id="illum",
        index_id="vel",
    ),
    x_amz_algorithm="error",
    x_amz_content_sha256="deserunt",
    x_amz_credential="suscipit",
    x_amz_date="iure",
    x_amz_security_token="magnam",
    x_amz_signature="debitis",
    x_amz_signed_headers="ipsa",
    x_amz_target="AWSKendraFrontendService.AssociateEntitiesToExperience",
)
    
res = s.associate_entities_to_experience(req)

if res.associate_entities_to_experience_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->