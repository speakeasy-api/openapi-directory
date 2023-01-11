<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.PostCreateNotificationConfigurationRequest(
    security=operations.PostCreateNotificationConfigurationSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request="odio",
)
    
res = s.general.post_create_notification_configuration(req)

if res.get_notification_configuration_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->