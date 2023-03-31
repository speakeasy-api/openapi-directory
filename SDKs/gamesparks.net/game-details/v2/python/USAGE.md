<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETAnalyticsDataUsingGETRequest(
    api_key="corrupti",
    data_type="sessionAnalytic",
    end_date="2021-04-24",
    keys="unde",
    precision="MONTHLY",
    stage="PREVIEW",
    start_date="2021-09-24",
)
    
res = s.analytics.get_analytics_data_using_get(req)

if res.analytics_data_swagger_models is not None:
    # handle response
```
<!-- End SDK Example Usage -->