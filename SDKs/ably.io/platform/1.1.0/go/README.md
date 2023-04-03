# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/ably.io/platform/1.1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.RequestAccessTokenRequest{
        RequestBody: &operations.RequestAccessTokenRequestBody{},
        XAblyVersion: "corrupti",
        Format: "msgpack",
        KeyName: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Authentication.RequestAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TokenDetails != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Authentication

* `RequestAccessToken` - Request an access token

### History

* `GetMessagesByChannel` - Get message history for a channel
* `GetPresenceHistoryOfChannel` - Get presence history of a channel

### Publishing

* `PublishMessagesToChannelForm` - Publish a message to a channel
* `PublishMessagesToChannelJSON` - Publish a message to a channel
* `PublishMessagesToChannelRaw` - Publish a message to a channel

### Push

* `DeletePushDeviceDetails` - Delete a registered device's update token
* `GetChannelsWithPushSubscribers` - List all channels with at least one subscribed device
* `GetPushDeviceDetails` - Get a device registration
* `GetPushSubscriptionsOnChannels` - List channel subscriptions
* `GetRegisteredPushDevices` - List devices registered for receiving push notifications
* `PatchPushDeviceDetailsForm` - Update a device registration
* `PatchPushDeviceDetailsJSON` - Update a device registration
* `PatchPushDeviceDetailsRaw` - Update a device registration
* `PublishPushNotificationToDevicesForm` - Publish a push notification to device(s)
* `PublishPushNotificationToDevicesJSON` - Publish a push notification to device(s)
* `PublishPushNotificationToDevicesRaw` - Publish a push notification to device(s)
* `PutPushDeviceDetailsForm` - Update a device registration
* `PutPushDeviceDetailsJSON` - Update a device registration
* `PutPushDeviceDetailsRaw` - Update a device registration
* `RegisterPushDeviceJSON` - Register a device for receiving push notifications
* `RegisterPushDeviceRaw` - Register a device for receiving push notifications
* `UnregisterAllPushDevices` - Unregister matching devices for push notifications
* `UnregisterPushDevice` - Unregister a single device for push notifications
* `UpdatePushDeviceDetails` - Reset a registered device's update token

### Stats

* `GetStats` - Retrieve usage statistics for an application
* `GetTime` - Get the service time

### Status

* `GetMetadataOfAllChannels` - Enumerate all active channels of the application
* `GetMetadataOfChannel` - Get metadata of a channel
* `GetPresenceOfChannel` - Get presence of a channel
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
