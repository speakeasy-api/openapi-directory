<!-- Start SDK Example Usage -->
```typescript
import {
  GETAbortEnvironmentUpdateRequest,
  GETAbortEnvironmentUpdateResponse,
  GETAbortEnvironmentUpdateActionEnum,
  GETAbortEnvironmentUpdateVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAbortEnvironmentUpdateRequest = {
  action: GETAbortEnvironmentUpdateActionEnum.AbortEnvironmentUpdate,
  environmentId: "corrupti",
  environmentName: "provident",
  version: GETAbortEnvironmentUpdateVersionEnum.TwoThousandAndTen1201,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getAbortEnvironmentUpdate(req).then((res: GETAbortEnvironmentUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->