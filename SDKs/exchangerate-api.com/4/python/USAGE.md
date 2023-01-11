<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetLatestBaseCurrencyRequest(
    path_params=operations.GetLatestBaseCurrencyPathParams(
        base_currency="quo",
    ),
)
    
res = s.get_latest_base_currency_(req)

if res.get_latest_base_currency_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->