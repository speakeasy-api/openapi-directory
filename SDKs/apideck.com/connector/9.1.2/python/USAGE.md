<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.APIResourceCoverageOneRequest(
    id="corrupti",
    resource_id="provident",
    x_apideck_app_id="distinctio",
)
    
res = s.api_resources.api_resource_coverage_one(req, operations.APIResourceCoverageOneSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_api_resource_coverage_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->