<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetCompaniesCompanyIDAPICredentialsRequest(
    company_id="corrupti",
    page_number=592845,
    page_size=715190,
)
    
res = s.api_credentials_company_level.get_companies_company_id_api_credentials(req, operations.GetCompaniesCompanyIDAPICredentialsSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.list_company_api_credentials_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->