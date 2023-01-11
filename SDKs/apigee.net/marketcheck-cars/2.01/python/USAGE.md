<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CrmCheckRequest(
    path_params=operations.CrmCheckPathParams(
        vin="qui",
    ),
    query_params=operations.CrmCheckQueryParams(
        api_key="aut",
        sale_date="voluptatum",
    ),
)
    
res = s.crm_cleanse_api.crm_check(req)

if res.crm_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->