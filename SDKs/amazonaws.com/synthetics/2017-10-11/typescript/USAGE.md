<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateResourceRequest,
  AssociateResourceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateResourceRequest = {
  requestBody: {
    resourceArn: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  groupIdentifier: "vel",
};

sdk.associateResource(req).then((res: AssociateResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->