<!-- Start SDK Example Usage -->
```typescript
import {
  CancelResourceRequestRequest,
  CancelResourceRequestResponse,
  CancelResourceRequestXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelResourceRequestRequest = {
  cancelResourceRequestInput: {
    requestToken: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CancelResourceRequestXAmzTargetEnum.CloudApiServiceCancelResourceRequest,
};

sdk.cancelResourceRequest(req).then((res: CancelResourceRequestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->