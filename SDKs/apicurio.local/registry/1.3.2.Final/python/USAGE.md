<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateArtifactRuleRequest(
    path_params=operations.CreateArtifactRulePathParams(
        artifact_id="et",
    ),
    request=shared.Rule(
        config="explicabo",
        type="VALIDITY",
    ),
)
    
res = s.artifact_rules.create_artifact_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->