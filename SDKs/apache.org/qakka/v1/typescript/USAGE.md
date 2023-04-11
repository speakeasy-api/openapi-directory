<!-- Start SDK Example Usage -->
```typescript
import {
  AckMessageRequest,
  AckMessageResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AckMessageRequest = {
  queueMessageId: "corrupti",
  queueName: "provident",
};

sdk.queues.ackMessage(req).then((res: AckMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->