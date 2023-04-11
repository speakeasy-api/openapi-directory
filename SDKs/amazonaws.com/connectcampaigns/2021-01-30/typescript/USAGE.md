<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCampaignRequest,
  CreateCampaignResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCampaignRequest = {
  requestBody: {
    connectInstanceId: "corrupti",
    dialerConfig: {
      predictiveDialerConfig: {
        bandwidthAllocation: 5928.45,
      },
      progressiveDialerConfig: {
        bandwidthAllocation: 7151.9,
      },
    },
    name: "quibusdam",
    outboundCallConfig: {
      answerMachineDetectionConfig: {
        enableAnswerMachineDetection: false,
      },
      connectContactFlowId: "unde",
      connectQueueId: "nulla",
      connectSourcePhoneNumber: "corrupti",
    },
    tags: {
      "vel": "error",
      "deserunt": "suscipit",
      "iure": "magnam",
      "debitis": "ipsa",
    },
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
};

sdk.createCampaign(req).then((res: CreateCampaignResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->