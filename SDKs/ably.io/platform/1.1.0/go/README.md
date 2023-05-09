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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
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

    ctx := context.Background()
    res, err := s.Authentication.RequestAccessToken(ctx, operations.RequestAccessTokenRequest{
        RequestBody: &operations.RequestAccessTokenRequestBody{},
        XAblyVersion: sdk.String("corrupti"),
        Format: shared.ResponseFormatEnumMsgpack.ToPointer(),
        KeyName: "distinctio",
    })
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


### [Authentication](docs/authentication/README.md)

* [RequestAccessToken](docs/authentication/README.md#requestaccesstoken) - Request an access token

### [History](docs/history/README.md)

* [GetMessagesByChannel](docs/history/README.md#getmessagesbychannel) - Get message history for a channel
* [GetPresenceHistoryOfChannel](docs/history/README.md#getpresencehistoryofchannel) - Get presence history of a channel

### [Publishing](docs/publishing/README.md)

* [PublishMessagesToChannelForm](docs/publishing/README.md#publishmessagestochannelform) - Publish a message to a channel
* [PublishMessagesToChannelJSON](docs/publishing/README.md#publishmessagestochanneljson) - Publish a message to a channel
* [PublishMessagesToChannelRaw](docs/publishing/README.md#publishmessagestochannelraw) - Publish a message to a channel

### [Push](docs/push/README.md)

* [DeletePushDeviceDetails](docs/push/README.md#deletepushdevicedetails) - Delete a registered device's update token
* [GetChannelsWithPushSubscribers](docs/push/README.md#getchannelswithpushsubscribers) - List all channels with at least one subscribed device
* [GetPushDeviceDetails](docs/push/README.md#getpushdevicedetails) - Get a device registration
* [GetPushSubscriptionsOnChannels](docs/push/README.md#getpushsubscriptionsonchannels) - List channel subscriptions
* [GetRegisteredPushDevices](docs/push/README.md#getregisteredpushdevices) - List devices registered for receiving push notifications
* [PatchPushDeviceDetailsForm](docs/push/README.md#patchpushdevicedetailsform) - Update a device registration
* [PatchPushDeviceDetailsJSON](docs/push/README.md#patchpushdevicedetailsjson) - Update a device registration
* [PatchPushDeviceDetailsRaw](docs/push/README.md#patchpushdevicedetailsraw) - Update a device registration
* [PublishPushNotificationToDevicesForm](docs/push/README.md#publishpushnotificationtodevicesform) - Publish a push notification to device(s)
* [PublishPushNotificationToDevicesJSON](docs/push/README.md#publishpushnotificationtodevicesjson) - Publish a push notification to device(s)
* [PublishPushNotificationToDevicesRaw](docs/push/README.md#publishpushnotificationtodevicesraw) - Publish a push notification to device(s)
* [PutPushDeviceDetailsForm](docs/push/README.md#putpushdevicedetailsform) - Update a device registration
* [PutPushDeviceDetailsJSON](docs/push/README.md#putpushdevicedetailsjson) - Update a device registration
* [PutPushDeviceDetailsRaw](docs/push/README.md#putpushdevicedetailsraw) - Update a device registration
* [RegisterPushDeviceJSON](docs/push/README.md#registerpushdevicejson) - Register a device for receiving push notifications
* [RegisterPushDeviceRaw](docs/push/README.md#registerpushdeviceraw) - Register a device for receiving push notifications
* [UnregisterAllPushDevices](docs/push/README.md#unregisterallpushdevices) - Unregister matching devices for push notifications
* [UnregisterPushDevice](docs/push/README.md#unregisterpushdevice) - Unregister a single device for push notifications
* [UpdatePushDeviceDetails](docs/push/README.md#updatepushdevicedetails) - Reset a registered device's update token

### [Stats](docs/stats/README.md)

* [GetStats](docs/stats/README.md#getstats) - Retrieve usage statistics for an application
* [GetTime](docs/stats/README.md#gettime) - Get the service time

### [Status](docs/status/README.md)

* [GetMetadataOfAllChannels](docs/status/README.md#getmetadataofallchannels) - Enumerate all active channels of the application
* [GetMetadataOfChannel](docs/status/README.md#getmetadataofchannel) - Get metadata of a channel
* [GetPresenceOfChannel](docs/status/README.md#getpresenceofchannel) - Get presence of a channel
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
