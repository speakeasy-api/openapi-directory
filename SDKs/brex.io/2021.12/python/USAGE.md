<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CompanyAlternativeSearchRequest(
    request_body=operations.CompanyAlternativeSearchRequestBody(
        address="5786 Little Streets",
        name="vel",
        number="error",
        phone="1-542-909-2347 x8545",
        url="nisi",
        vat="recusandae",
    ),
    country="temporibus",
)
    
res = s.v1_company.company_alternative_search(req, operations.CompanyAlternativeSearchSecurity(
    user_key="YOUR_API_KEY_HERE",
))

if res.company_alternative_search_200_application_json_objects is not None:
    # handle response
```
<!-- End SDK Example Usage -->