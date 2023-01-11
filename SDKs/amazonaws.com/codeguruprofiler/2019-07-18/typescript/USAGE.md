<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddNotificationChannelsRequest, AddNotificationChannelsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddNotificationChannelsRequest = {
  pathParams: {
    profilingGroupName: "sit",
  },
  headers: {
    xAmzAlgorithm: "voluptas",
    xAmzContentSha256: "culpa",
    xAmzCredential: "expedita",
    xAmzDate: "consequuntur",
    xAmzSecurityToken: "dolor",
    xAmzSignature: "expedita",
    xAmzSignedHeaders: "voluptas",
  },
  request: {
    channels: [
      {
        eventPublishers: [
          "AnomalyDetection",
        ],
        id: "rerum",
        uri: "dicta",
      },
    ],
  },
};

sdk.addNotificationChannels(req).then((res: AddNotificationChannelsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->