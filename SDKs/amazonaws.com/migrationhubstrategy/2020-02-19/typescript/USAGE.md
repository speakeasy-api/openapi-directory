<!-- Start SDK Example Usage -->
```typescript
import {
  GetApplicationComponentDetailsRequest,
  GetApplicationComponentDetailsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetApplicationComponentDetailsRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  applicationComponentId: "illum",
};

sdk.getApplicationComponentDetails(req).then((res: GetApplicationComponentDetailsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->