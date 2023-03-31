<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateArtifactRuleRequest(
    rule=shared.Rule(
        config="corrupti",
        type="VALIDITY",
    ),
    artifact_id="provident",
)
    
res = s.artifact_rules.create_artifact_rule(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->