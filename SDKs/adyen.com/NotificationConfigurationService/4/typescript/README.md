# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/NotificationConfigurationService/4/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/adyen.com/NotificationConfigurationService/4/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreateNotificationConfigurationRequest,
  PostCreateNotificationConfigurationResponse
} from "openapi/dist/sdk/models/operations";
import {
  NotificationConfigurationDetailsMessageFormatEnum,
  NotificationConfigurationDetailsSslProtocolEnum,
  NotificationEventConfigurationEventTypeEnum,
  NotificationEventConfigurationIncludeModeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreateNotificationConfigurationRequest = {
  configurationDetails: {
    active: false,
    apiVersion: 548814,
    description: "provident",
    eventConfigs: [
      {
        eventType: NotificationEventConfigurationEventTypeEnum.ScheduledRefunds,
        includeMode: NotificationEventConfigurationIncludeModeEnum.Include,
      },
      {
        eventType: NotificationEventConfigurationEventTypeEnum.ScheduledRefunds,
        includeMode: NotificationEventConfigurationIncludeModeEnum.Include,
      },
      {
        eventType: NotificationEventConfigurationEventTypeEnum.ScheduledRefunds,
        includeMode: NotificationEventConfigurationIncludeModeEnum.Exclude,
      },
    ],
    messageFormat: NotificationConfigurationDetailsMessageFormatEnum.Soap,
    notificationId: 645894,
    notifyPassword: "suscipit",
    notifyURL: "iure",
    notifyUsername: "magnam",
    sendActionHeader: false,
    sslProtocol: NotificationConfigurationDetailsSslProtocolEnum.TLSv13,
  },
};

sdk.general.postCreateNotificationConfiguration(req).then((res: PostCreateNotificationConfigurationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### general

* `postCreateNotificationConfiguration` - Subscribe to notifications
* `postDeleteNotificationConfigurations` - Delete a notification subscription configuration
* `postGetNotificationConfiguration` - Get a notification subscription configuration
* `postGetNotificationConfigurationList` - Get a list of notification subscription configurations
* `postTestNotificationConfiguration` - Test a notification configuration
* `postUpdateNotificationConfiguration` - Update a notification subscription configuration
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

