<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetDailyReportAllCountriesRequest(
    query_params=operations.GetDailyReportAllCountriesQueryParams(
        date_="ipsam",
        date_format="YYYY-MM-DD",
        format="xml",
    ),
)
    
res = s.country.get_daily_report_all_countries(req)

if res.get_daily_report_all_countries_200_application_json_objects is not None:
    # handle response
```
<!-- End SDK Example Usage -->