<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptEnvironmentAccountConnectionRequest,
  AcceptEnvironmentAccountConnectionResponse,
  AcceptEnvironmentAccountConnectionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptEnvironmentAccountConnectionRequest = {
  acceptEnvironmentAccountConnectionInput: {
    id: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AcceptEnvironmentAccountConnectionXAmzTargetEnum.AwsProton20200720AcceptEnvironmentAccountConnection,
};

sdk.acceptEnvironmentAccountConnection(req).then((res: AcceptEnvironmentAccountConnectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->