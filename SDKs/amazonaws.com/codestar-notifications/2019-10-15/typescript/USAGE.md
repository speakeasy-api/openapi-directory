<!-- Start SDK Example Usage -->
```typescript
import {
  CreateNotificationRuleRequest,
  CreateNotificationRuleResponse,
  CreateNotificationRuleRequestBodyDetailTypeEnum,
  CreateNotificationRuleRequestBodyStatusEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateNotificationRuleRequest = {
  requestBody: {
    clientRequestToken: "corrupti",
    detailType: CreateNotificationRuleRequestBodyDetailTypeEnum.Full,
    eventTypeIds: [
      "quibusdam",
      "unde",
      "nulla",
    ],
    name: "corrupti",
    resource: "illum",
    status: CreateNotificationRuleRequestBodyStatusEnum.Enabled,
    tags: {
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
    targets: [
      {
        targetAddress: "tempora",
        targetType: "suscipit",
      },
      {
        targetAddress: "molestiae",
        targetType: "minus",
      },
      {
        targetAddress: "placeat",
        targetType: "voluptatum",
      },
      {
        targetAddress: "iusto",
        targetType: "excepturi",
      },
    ],
  },
  xAmzAlgorithm: "nisi",
  xAmzContentSha256: "recusandae",
  xAmzCredential: "temporibus",
  xAmzDate: "ab",
  xAmzSecurityToken: "quis",
  xAmzSignature: "veritatis",
  xAmzSignedHeaders: "deserunt",
};

sdk.createNotificationRule(req).then((res: CreateNotificationRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->