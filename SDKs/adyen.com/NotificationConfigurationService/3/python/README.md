# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/adyen.com/NotificationConfigurationService/3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `post_create_notification_configuration` - Subscribe to notifications
* `post_delete_notification_configurations` - Delete a notification subscription configuration
* `post_get_notification_configuration` - Get a notification subscription configuration
* `post_get_notification_configuration_list` - Get a list of notification subscription configurations
* `post_test_notification_configuration` - Test a notification configuration
* `post_update_notification_configuration` - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
