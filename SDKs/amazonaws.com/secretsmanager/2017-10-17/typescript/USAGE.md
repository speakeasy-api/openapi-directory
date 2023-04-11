<!-- Start SDK Example Usage -->
```typescript
import {
  CancelRotateSecretRequest,
  CancelRotateSecretResponse,
  CancelRotateSecretXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelRotateSecretRequest = {
  cancelRotateSecretRequest: {
    secretId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: CancelRotateSecretXAmzTargetEnum.SecretsmanagerCancelRotateSecret,
};

sdk.cancelRotateSecret(req).then((res: CancelRotateSecretResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->