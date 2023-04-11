<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateApplicationFleetRequest,
  AssociateApplicationFleetResponse,
  AssociateApplicationFleetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateApplicationFleetRequest = {
  associateApplicationFleetRequest: {
    applicationArn: "corrupti",
    fleetName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateApplicationFleetXAmzTargetEnum.PhotonAdminProxyServiceAssociateApplicationFleet,
};

sdk.associateApplicationFleet(req).then((res: AssociateApplicationFleetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->