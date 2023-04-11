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