<!-- Start SDK Example Usage -->
```typescript
import {
  CreateProjectRequest,
  CreateProjectResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateProjectRequest = {
  requestBody: {
    contents: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  name: "vel",
  region: "error",
  snapshotId: "deserunt",
};

sdk.createProject(req).then((res: CreateProjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->