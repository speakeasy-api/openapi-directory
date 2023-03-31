<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteSettingsOrganizationsOrganizationNameRequest(
    organization_name="corrupti",
)
    
res = s.delete_settings_organizations_organization_name_(req, operations.DeleteSettingsOrganizationsOrganizationNameSecurity(
    o_auth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.organization is not None:
    # handle response
```
<!-- End SDK Example Usage -->