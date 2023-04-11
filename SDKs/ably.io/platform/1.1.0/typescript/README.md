# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ably.io/platform/1.1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/ably.io/platform/1.1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  RequestAccessTokenRequest,
  RequestAccessTokenResponse
} from "openapi/dist/sdk/models/operations";
import {
  ResponseFormatEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
});

const req: RequestAccessTokenRequest = {
  requestBody: {
    capability: {
      "distinctio": "quibusdam",
      "unde": "nulla",
      "corrupti": "illum",
    },
    clientId: "vel",
    keyName: "xVLyHw.LMJZxw",
    mac: "error",
    nonce: "deserunt",
    timestamp: 384382,
  },
  xAblyVersion: "iure",
  format: ResponseFormatEnum.Jsonp,
  keyName: "debitis",
};

sdk.authentication.requestAccessToken(req).then((res: RequestAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### authentication

* `requestAccessToken` - Request an access token

### history

* `getMessagesByChannel` - Get message history for a channel
* `getPresenceHistoryOfChannel` - Get presence history of a channel

### publishing

* `publishMessagesToChannelForm` - Publish a message to a channel
* `publishMessagesToChannelJson` - Publish a message to a channel
* `publishMessagesToChannelRaw` - Publish a message to a channel

### push

* `deletePushDeviceDetails` - Delete a registered device's update token
* `getChannelsWithPushSubscribers` - List all channels with at least one subscribed device
* `getPushDeviceDetails` - Get a device registration
* `getPushSubscriptionsOnChannels` - List channel subscriptions
* `getRegisteredPushDevices` - List devices registered for receiving push notifications
* `patchPushDeviceDetailsForm` - Update a device registration
* `patchPushDeviceDetailsJson` - Update a device registration
* `patchPushDeviceDetailsRaw` - Update a device registration
* `publishPushNotificationToDevicesForm` - Publish a push notification to device(s)
* `publishPushNotificationToDevicesJson` - Publish a push notification to device(s)
* `publishPushNotificationToDevicesRaw` - Publish a push notification to device(s)
* `putPushDeviceDetailsForm` - Update a device registration
* `putPushDeviceDetailsJson` - Update a device registration
* `putPushDeviceDetailsRaw` - Update a device registration
* `registerPushDeviceJson` - Register a device for receiving push notifications
* `registerPushDeviceRaw` - Register a device for receiving push notifications
* `subscribePushDeviceToChannelForm` - Subscribe a device to a channel
* `subscribePushDeviceToChannelJson` - Subscribe a device to a channel
* `subscribePushDeviceToChannelRaw` - Subscribe a device to a channel
* `unregisterAllPushDevices` - Unregister matching devices for push notifications
* `unregisterPushDevice` - Unregister a single device for push notifications
* `updatePushDeviceDetails` - Reset a registered device's update token

### stats

* `getStats` - Retrieve usage statistics for an application
* `getTime` - Get the service time

### status

* `getMetadataOfAllChannels` - Enumerate all active channels of the application
* `getMetadataOfChannel` - Get metadata of a channel
* `getPresenceOfChannel` - Get presence of a channel
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

