<!-- Start SDK Example Usage -->
```typescript
import {
  GETAddPermissionRequest,
  GETAddPermissionResponse,
  GETAddPermissionActionEnum,
  GETAddPermissionVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAddPermissionRequest = {
  awsAccountIds: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  accountNumber: 602763,
  action: GETAddPermissionActionEnum.AddPermission,
  actions: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  label: "deserunt",
  queueName: "suscipit",
  version: GETAddPermissionVersionEnum.TwoThousandAndTwelve1105,
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.getAddPermission(req).then((res: GETAddPermissionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->