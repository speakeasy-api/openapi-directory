<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CreateNotificationConfigurationRequest(
    configuration_details=shared.NotificationConfigurationDetails(
        active=False,
        api_version=548814,
        description="provident",
        event_configs=[
            shared.NotificationEventConfiguration(
                event_type="SCHEDULED_REFUNDS",
                include_mode="INCLUDE",
            ),
            shared.NotificationEventConfiguration(
                event_type="SCHEDULED_REFUNDS",
                include_mode="INCLUDE",
            ),
            shared.NotificationEventConfiguration(
                event_type="SCHEDULED_REFUNDS",
                include_mode="EXCLUDE",
            ),
        ],
        message_format="SOAP",
        notification_id=645894,
        notify_password="suscipit",
        notify_url="iure",
        notify_username="magnam",
        send_action_header=False,
        ssl_protocol="TLSv13",
    ),
)
    
res = s.general.post_create_notification_configuration(req, operations.PostCreateNotificationConfigurationSecurity(
    api_key_auth="YOUR_API_KEY_HERE",
))

if res.get_notification_configuration_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->