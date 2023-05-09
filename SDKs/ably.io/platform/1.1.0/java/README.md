# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestAccessTokenRequest;
import org.openapis.openapi.models.operations.RequestAccessTokenResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SignedTokenRequest;
import org.openapis.openapi.models.shared.TokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RequestAccessTokenRequest req = new RequestAccessTokenRequest("distinctio") {{
                requestBody = new SignedTokenRequest(                new java.util.HashMap<String, Object>() {{
                                    put("nulla", "corrupti");
                                    put("illum", "vel");
                                    put("error", "deserunt");
                                }}, "xVLyHw.LMJZxw", "suscipit", "iure", 297534L) {{
                    clientId = "debitis";
                }};;
                xAblyVersion = "ipsa";
                format = ResponseFormatEnum.HTML;
            }};            

            RequestAccessTokenResponse res = sdk.authentication.requestAccessToken(req);

            if (res.tokenDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authentication](docs/authentication/README.md)

* [requestAccessToken](docs/authentication/README.md#requestaccesstoken) - Request an access token

### [history](docs/history/README.md)

* [getMessagesByChannel](docs/history/README.md#getmessagesbychannel) - Get message history for a channel
* [getPresenceHistoryOfChannel](docs/history/README.md#getpresencehistoryofchannel) - Get presence history of a channel

### [publishing](docs/publishing/README.md)

* [publishMessagesToChannelForm](docs/publishing/README.md#publishmessagestochannelform) - Publish a message to a channel
* [publishMessagesToChannelJson](docs/publishing/README.md#publishmessagestochanneljson) - Publish a message to a channel
* [publishMessagesToChannelRaw](docs/publishing/README.md#publishmessagestochannelraw) - Publish a message to a channel

### [push](docs/push/README.md)

* [deletePushDeviceDetails](docs/push/README.md#deletepushdevicedetails) - Delete a registered device's update token
* [getChannelsWithPushSubscribers](docs/push/README.md#getchannelswithpushsubscribers) - List all channels with at least one subscribed device
* [getPushDeviceDetails](docs/push/README.md#getpushdevicedetails) - Get a device registration
* [getPushSubscriptionsOnChannels](docs/push/README.md#getpushsubscriptionsonchannels) - List channel subscriptions
* [getRegisteredPushDevices](docs/push/README.md#getregisteredpushdevices) - List devices registered for receiving push notifications
* [patchPushDeviceDetailsForm](docs/push/README.md#patchpushdevicedetailsform) - Update a device registration
* [patchPushDeviceDetailsJson](docs/push/README.md#patchpushdevicedetailsjson) - Update a device registration
* [patchPushDeviceDetailsRaw](docs/push/README.md#patchpushdevicedetailsraw) - Update a device registration
* [publishPushNotificationToDevicesForm](docs/push/README.md#publishpushnotificationtodevicesform) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesJson](docs/push/README.md#publishpushnotificationtodevicesjson) - Publish a push notification to device(s)
* [publishPushNotificationToDevicesRaw](docs/push/README.md#publishpushnotificationtodevicesraw) - Publish a push notification to device(s)
* [putPushDeviceDetailsForm](docs/push/README.md#putpushdevicedetailsform) - Update a device registration
* [putPushDeviceDetailsJson](docs/push/README.md#putpushdevicedetailsjson) - Update a device registration
* [putPushDeviceDetailsRaw](docs/push/README.md#putpushdevicedetailsraw) - Update a device registration
* [registerPushDeviceJson](docs/push/README.md#registerpushdevicejson) - Register a device for receiving push notifications
* [registerPushDeviceRaw](docs/push/README.md#registerpushdeviceraw) - Register a device for receiving push notifications
* [subscribePushDeviceToChannelForm](docs/push/README.md#subscribepushdevicetochannelform) - Subscribe a device to a channel
* [subscribePushDeviceToChannelJson](docs/push/README.md#subscribepushdevicetochanneljson) - Subscribe a device to a channel
* [subscribePushDeviceToChannelRaw](docs/push/README.md#subscribepushdevicetochannelraw) - Subscribe a device to a channel
* [unregisterAllPushDevices](docs/push/README.md#unregisterallpushdevices) - Unregister matching devices for push notifications
* [unregisterPushDevice](docs/push/README.md#unregisterpushdevice) - Unregister a single device for push notifications
* [updatePushDeviceDetails](docs/push/README.md#updatepushdevicedetails) - Reset a registered device's update token

### [stats](docs/stats/README.md)

* [getStats](docs/stats/README.md#getstats) - Retrieve usage statistics for an application
* [getTime](docs/stats/README.md#gettime) - Get the service time

### [status](docs/status/README.md)

* [getMetadataOfAllChannels](docs/status/README.md#getmetadataofallchannels) - Enumerate all active channels of the application
* [getMetadataOfChannel](docs/status/README.md#getmetadataofchannel) - Get metadata of a channel
* [getPresenceOfChannel](docs/status/README.md#getpresenceofchannel) - Get presence of a channel
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
