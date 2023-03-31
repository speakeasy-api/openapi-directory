<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DriveGroupsAddRequest(
    drive_group_input=shared.DriveGroupInput(
        description="A description",
        display_name="accounting",
        name="accounting",
    ),
    raw=False,
    x_apideck_app_id="corrupti",
    x_apideck_consumer_id="provident",
    x_apideck_service_id="distinctio",
)
    
res = s.drive_groups.drive_groups_add(req, operations.DriveGroupsAddSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.create_drive_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->