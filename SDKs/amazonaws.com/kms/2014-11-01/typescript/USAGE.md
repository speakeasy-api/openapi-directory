<!-- Start SDK Example Usage -->
```typescript
import {
  CancelKeyDeletionRequest,
  CancelKeyDeletionResponse,
  CancelKeyDeletionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelKeyDeletionRequest = {
  cancelKeyDeletionRequest: {
    keyId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CancelKeyDeletionXAmzTargetEnum.TrentServiceCancelKeyDeletion,
};

sdk.cancelKeyDeletion(req).then((res: CancelKeyDeletionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->