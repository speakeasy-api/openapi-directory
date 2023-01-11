<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteSettingsOrganizationsOrganizationNameRequest(
    security=operations.DeleteSettingsOrganizationsOrganizationNameSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DeleteSettingsOrganizationsOrganizationNamePathParams(
        organization_name="voluptas",
    ),
)
    
res = s.delete_settings_organizations_organization_name_(req)

if res.organization is not None:
    # handle response
```
<!-- End SDK Example Usage -->