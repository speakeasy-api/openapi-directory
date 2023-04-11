<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateGatewayToServerRequest,
  AssociateGatewayToServerResponse,
  AssociateGatewayToServerXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateGatewayToServerRequest = {
  associateGatewayToServerInput: {
    gatewayArn: "corrupti",
    serverArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateGatewayToServerXAmzTargetEnum.BackupOnPremisesV20210101AssociateGatewayToServer,
};

sdk.associateGatewayToServer(req).then((res: AssociateGatewayToServerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->