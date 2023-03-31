# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ably.io/platform/1.1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
)


req = operations.RequestAccessTokenRequest(
    request_body=shared.SignedTokenRequest(
        capability={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        client_id="vel",
        key_name="xVLyHw.LMJZxw",
        mac="error",
        nonce="deserunt",
        timestamp=384382,
    ),
    x_ably_version="iure",
    format="jsonp",
    key_name="debitis",
)
    
res = s.authentication.request_access_token(req)

if res.token_details is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `request_access_token` - Request an access token

### history

* `get_messages_by_channel` - Get message history for a channel
* `get_presence_history_of_channel` - Get presence history of a channel

### publishing

* `publish_messages_to_channel_form` - Publish a message to a channel
* `publish_messages_to_channel_json` - Publish a message to a channel
* `publish_messages_to_channel_raw` - Publish a message to a channel

### push

* `delete_push_device_details` - Delete a registered device's update token
* `get_channels_with_push_subscribers` - List all channels with at least one subscribed device
* `get_push_device_details` - Get a device registration
* `get_push_subscriptions_on_channels` - List channel subscriptions
* `get_registered_push_devices` - List devices registered for receiving push notifications
* `patch_push_device_details_form` - Update a device registration
* `patch_push_device_details_json` - Update a device registration
* `patch_push_device_details_raw` - Update a device registration
* `publish_push_notification_to_devices_form` - Publish a push notification to device(s)
* `publish_push_notification_to_devices_json` - Publish a push notification to device(s)
* `publish_push_notification_to_devices_raw` - Publish a push notification to device(s)
* `put_push_device_details_form` - Update a device registration
* `put_push_device_details_json` - Update a device registration
* `put_push_device_details_raw` - Update a device registration
* `register_push_device_json` - Register a device for receiving push notifications
* `register_push_device_raw` - Register a device for receiving push notifications
* `subscribe_push_device_to_channel_form` - Subscribe a device to a channel
* `subscribe_push_device_to_channel_json` - Subscribe a device to a channel
* `subscribe_push_device_to_channel_raw` - Subscribe a device to a channel
* `unregister_all_push_devices` - Unregister matching devices for push notifications
* `unregister_push_device` - Unregister a single device for push notifications
* `update_push_device_details` - Reset a registered device's update token

### stats

* `get_stats` - Retrieve usage statistics for an application
* `get_time` - Get the service time

### status

* `get_metadata_of_all_channels` - Enumerate all active channels of the application
* `get_metadata_of_channel` - Get metadata of a channel
* `get_presence_of_channel` - Get presence of a channel
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
