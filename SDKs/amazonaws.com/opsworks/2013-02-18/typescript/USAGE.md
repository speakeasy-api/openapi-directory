<!-- Start SDK Example Usage -->
```typescript
import {
  AssignInstanceRequest,
  AssignInstanceResponse,
  AssignInstanceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssignInstanceRequest = {
  assignInstanceRequest: {
    instanceId: "corrupti",
    layerIds: [
      "distinctio",
      "quibusdam",
      "unde",
    ],
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: AssignInstanceXAmzTargetEnum.OpsWorks20130218AssignInstance,
};

sdk.assignInstance(req).then((res: AssignInstanceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->