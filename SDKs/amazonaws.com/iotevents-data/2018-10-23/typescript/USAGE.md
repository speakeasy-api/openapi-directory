<!-- Start SDK Example Usage -->
```typescript
import {
  BatchAcknowledgeAlarmRequest,
  BatchAcknowledgeAlarmResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchAcknowledgeAlarmRequest = {
  requestBody: {
    acknowledgeActionRequests: [
      {
        alarmModelName: "provident",
        keyValue: "distinctio",
        note: "quibusdam",
        requestId: "unde",
      },
      {
        alarmModelName: "nulla",
        keyValue: "corrupti",
        note: "illum",
        requestId: "vel",
      },
      {
        alarmModelName: "error",
        keyValue: "deserunt",
        note: "suscipit",
        requestId: "iure",
      },
    ],
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.batchAcknowledgeAlarm(req).then((res: BatchAcknowledgeAlarmResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->