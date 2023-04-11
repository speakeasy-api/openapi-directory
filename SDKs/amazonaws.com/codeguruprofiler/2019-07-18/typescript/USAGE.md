<!-- Start SDK Example Usage -->
```typescript
import {
  AddNotificationChannelsRequest,
  AddNotificationChannelsResponse
} from "openapi/dist/sdk/models/operations";
import {
  EventPublisherEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddNotificationChannelsRequest = {
  requestBody: {
    channels: [
      {
        eventPublishers: [
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
        ],
        id: "distinctio",
        uri: "https://outstanding-strait.name",
      },
      {
        eventPublishers: [
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
        ],
        id: "vel",
        uri: "https://present-giggle.info",
      },
      {
        eventPublishers: [
          EventPublisherEnum.AnomalyDetection,
          EventPublisherEnum.AnomalyDetection,
        ],
        id: "debitis",
        uri: "http://whirlwind-diver.info",
      },
    ],
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "minus",
  xAmzCredential: "placeat",
  xAmzDate: "voluptatum",
  xAmzSecurityToken: "iusto",
  xAmzSignature: "excepturi",
  xAmzSignedHeaders: "nisi",
  profilingGroupName: "recusandae",
};

sdk.addNotificationChannels(req).then((res: AddNotificationChannelsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->