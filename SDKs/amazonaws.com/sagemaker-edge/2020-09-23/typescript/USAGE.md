<!-- Start SDK Example Usage -->
```typescript
import {
  GetDeploymentsRequest,
  GetDeploymentsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetDeploymentsRequest = {
  requestBody: {
    deviceFleetName: "corrupti",
    deviceName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getDeployments(req).then((res: GetDeploymentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->