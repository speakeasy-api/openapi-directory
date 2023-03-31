<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RegistryCreateAPIRequest(
    api_input=shared.APIInput(
        annotations={
            "provident": "distinctio",
            "quibusdam": "unde",
            "nulla": "corrupti",
        },
        availability="illum",
        description="vel",
        display_name="error",
        labels={
            "suscipit": "iure",
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        name="tempora",
        recommended_deployment="suscipit",
        recommended_version="molestiae",
    ),
    api_id="minus",
    location="placeat",
    project="voluptatum",
)
    
res = s.registry.registry_create_api(req)

if res.api is not None:
    # handle response
```
<!-- End SDK Example Usage -->