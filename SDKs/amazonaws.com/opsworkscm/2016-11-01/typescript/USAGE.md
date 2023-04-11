<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateNodeRequest,
  AssociateNodeResponse,
  AssociateNodeXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateNodeRequest = {
  associateNodeRequest: {
    engineAttributes: [
      {
        name: "provident",
        value: "distinctio",
      },
      {
        name: "quibusdam",
        value: "unde",
      },
      {
        name: "nulla",
        value: "corrupti",
      },
    ],
    nodeName: "illum",
    serverName: "vel",
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: AssociateNodeXAmzTargetEnum.OpsWorksCMV20161101AssociateNode,
};

sdk.associateNode(req).then((res: AssociateNodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->