<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateDefaultViewRequest,
  AssociateDefaultViewResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateDefaultViewRequest = {
  requestBody: {
    viewArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.associateDefaultView(req).then((res: AssociateDefaultViewResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->