<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateTrackerConsumerRequest,
  AssociateTrackerConsumerResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateTrackerConsumerRequest = {
  requestBody: {
    consumerArn: "corrupti",
  },
  trackerName: "provident",
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.associateTrackerConsumer(req).then((res: AssociateTrackerConsumerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->