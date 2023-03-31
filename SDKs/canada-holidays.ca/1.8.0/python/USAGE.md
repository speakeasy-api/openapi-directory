<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.HolidayRequest(
    holiday_id=2,
    optional="true",
    year=592845,
)
    
res = s.holidays.holiday(req)

if res.holiday_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->