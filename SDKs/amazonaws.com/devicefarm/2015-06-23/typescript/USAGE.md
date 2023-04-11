<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDevicePoolRequest,
  CreateDevicePoolResponse,
  CreateDevicePoolXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  RuleOperatorEnum,
  DeviceAttributeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDevicePoolRequest = {
  createDevicePoolRequest: {
    description: "corrupti",
    maxDevices: 592845,
    name: "distinctio",
    projectArn: "quibusdam",
    rules: [
      {
        attribute: DeviceAttributeEnum.Model,
        operator: RuleOperatorEnum.GreaterThanOrEquals,
        value: "illum",
      },
      {
        attribute: DeviceAttributeEnum.RemoteDebugEnabled,
        operator: RuleOperatorEnum.GreaterThanOrEquals,
        value: "deserunt",
      },
      {
        attribute: DeviceAttributeEnum.RemoteAccessEnabled,
        operator: RuleOperatorEnum.GreaterThan,
        value: "magnam",
      },
    ],
  },
  xAmzAlgorithm: "debitis",
  xAmzContentSha256: "ipsa",
  xAmzCredential: "delectus",
  xAmzDate: "tempora",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "molestiae",
  xAmzSignedHeaders: "minus",
  xAmzTarget: CreateDevicePoolXAmzTargetEnum.DeviceFarm20150623CreateDevicePool,
};

sdk.createDevicePool(req).then((res: CreateDevicePoolResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->