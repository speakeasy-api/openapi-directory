<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateKmsKeyRequest,
  AssociateKmsKeyResponse,
  AssociateKmsKeyXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateKmsKeyRequest = {
  associateKmsKeyRequest: {
    kmsKeyId: "corrupti",
    logGroupName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateKmsKeyXAmzTargetEnum.Logs20140328AssociateKmsKey,
};

sdk.associateKmsKey(req).then((res: AssociateKmsKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->