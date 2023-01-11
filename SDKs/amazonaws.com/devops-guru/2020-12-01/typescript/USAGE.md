<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AddNotificationChannelRequest, AddNotificationChannelResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddNotificationChannelRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    config: {
      sns: {
        topicArn: "voluptas",
      },
    },
  },
};

sdk.addNotificationChannel(req).then((res: AddNotificationChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->