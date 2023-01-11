<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CompanyAlternativeSearchRequest(
    security=operations.CompanyAlternativeSearchSecurity(
        user_key=shared.SchemeUserKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.CompanyAlternativeSearchPathParams(
        country="quia",
    ),
    request=operations.CompanyAlternativeSearchRequestBody(
        address="velit",
        name="sed",
        number="occaecati",
        phone="quidem",
        url="maxime",
        vat="eos",
    ),
)
    
res = s.v1_company.company_alternative_search(req)

if res.company_alternative_search_200_application_json_anies is not None:
    # handle response
```
<!-- End SDK Example Usage -->