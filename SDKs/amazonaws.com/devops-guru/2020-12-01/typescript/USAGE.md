<!-- Start SDK Example Usage -->
```typescript
import {
  AddNotificationChannelRequest,
  AddNotificationChannelResponse
} from "openapi/dist/sdk/models/operations";
import {
  InsightSeverityEnum,
  NotificationMessageTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddNotificationChannelRequest = {
  requestBody: {
    config: {
      filters: {
        messageTypes: [
          NotificationMessageTypeEnum.NewAssociation,
          NotificationMessageTypeEnum.SeverityUpgraded,
          NotificationMessageTypeEnum.NewRecommendation,
        ],
        severities: [
          InsightSeverityEnum.High,
          InsightSeverityEnum.Medium,
          InsightSeverityEnum.High,
        ],
      },
      sns: {
        topicArn: "vel",
      },
    },
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
};

sdk.addNotificationChannel(req).then((res: AddNotificationChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->