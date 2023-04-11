<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateDeviceWithPlacementRequest,
  AssociateDeviceWithPlacementResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateDeviceWithPlacementRequest = {
  requestBody: {
    deviceId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  deviceTemplateName: "vel",
  placementName: "error",
  projectName: "deserunt",
};

sdk.associateDeviceWithPlacement(req).then((res: AssociateDeviceWithPlacementResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->