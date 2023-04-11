<!-- Start SDK Example Usage -->
```typescript
import {
  CreateRuleRequest,
  CreateRuleResponse,
  CreateRuleRequestBodyResourceTypeEnum,
} from "openapi/dist/sdk/models/operations";
import {
  RetentionPeriodUnitEnum,
  UnlockDelayUnitEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateRuleRequest = {
  requestBody: {
    description: "corrupti",
    lockConfiguration: {
      unlockDelay: {
        unlockDelayUnit: UnlockDelayUnitEnum.Days,
        unlockDelayValue: 592845,
      },
    },
    resourceTags: [
      {
        resourceTagKey: "quibusdam",
        resourceTagValue: "unde",
      },
      {
        resourceTagKey: "nulla",
        resourceTagValue: "corrupti",
      },
      {
        resourceTagKey: "illum",
        resourceTagValue: "vel",
      },
    ],
    resourceType: CreateRuleRequestBodyResourceTypeEnum.Ec2Image,
    retentionPeriod: {
      retentionPeriodUnit: RetentionPeriodUnitEnum.Days,
      retentionPeriodValue: 645894,
    },
    tags: [
      {
        key: "iure",
        value: "magnam",
      },
      {
        key: "debitis",
        value: "ipsa",
      },
    ],
  },
  xAmzAlgorithm: "delectus",
  xAmzContentSha256: "tempora",
  xAmzCredential: "suscipit",
  xAmzDate: "molestiae",
  xAmzSecurityToken: "minus",
  xAmzSignature: "placeat",
  xAmzSignedHeaders: "voluptatum",
};

sdk.createRule(req).then((res: CreateRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->