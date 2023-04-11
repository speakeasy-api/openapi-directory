<!-- Start SDK Example Usage -->
```typescript
import {
  CreateKeyspaceRequest,
  CreateKeyspaceResponse,
  CreateKeyspaceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateKeyspaceRequest = {
  createKeyspaceRequest: {
    keyspaceName: "corrupti",
    tags: [
      {
        key: "distinctio",
        value: "quibusdam",
      },
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: CreateKeyspaceXAmzTargetEnum.KeyspacesServiceCreateKeyspace,
};

sdk.createKeyspace(req).then((res: CreateKeyspaceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->