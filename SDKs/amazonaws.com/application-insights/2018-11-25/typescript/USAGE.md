<!-- Start SDK Example Usage -->
```typescript
import {
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  GroupingTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateApplicationRequest = {
  createApplicationRequest: {
    autoConfigEnabled: false,
    autoCreate: false,
    cweMonitorEnabled: false,
    groupingType: GroupingTypeEnum.AccountBased,
    opsCenterEnabled: false,
    opsItemSNSTopicArn: "corrupti",
    resourceGroupName: "provident",
    tags: [
      {
        key: "quibusdam",
        value: "unde",
      },
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
    ],
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: CreateApplicationXAmzTargetEnum.Ec2WindowsBarleyServiceCreateApplication,
};

sdk.createApplication(req).then((res: CreateApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->