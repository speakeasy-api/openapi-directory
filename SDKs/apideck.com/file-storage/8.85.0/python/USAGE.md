<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DriveGroupsAddRequest(
    security=operations.DriveGroupsAddSecurity(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    query_params=operations.DriveGroupsAddQueryParams(
        raw=True,
    ),
    headers=operations.DriveGroupsAddHeaders(
        x_apideck_app_id="deleniti",
        x_apideck_consumer_id="ut",
        x_apideck_service_id="corporis",
    ),
    request=shared.DriveGroupInput(
        description="enim",
        display_name="quia",
        name="autem",
    ),
)
    
res = s.drive_groups.drive_groups_add(req)

if res.create_drive_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->