<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchAcknowledgeAlarmRequest, BatchAcknowledgeAlarmResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchAcknowledgeAlarmRequest = {
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
    acknowledgeActionRequests: [
      {
        alarmModelName: "fugit",
        keyValue: "et",
        note: "nihil",
        requestId: "rerum",
      },
      {
        alarmModelName: "dicta",
        keyValue: "debitis",
        note: "voluptatum",
        requestId: "et",
      },
      {
        alarmModelName: "ut",
        keyValue: "dolorem",
        note: "et",
        requestId: "voluptate",
      },
    ],
  },
};

sdk.batchAcknowledgeAlarm(req).then((res: BatchAcknowledgeAlarmResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->