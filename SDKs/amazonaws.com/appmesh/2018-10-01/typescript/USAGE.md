<!-- Start SDK Example Usage -->
```typescript
import {
  CreateMeshRequest,
  CreateMeshResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateMeshRequest = {
  requestBody: {
    clientToken: "corrupti",
    meshName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.createMesh(req).then((res: CreateMeshResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->