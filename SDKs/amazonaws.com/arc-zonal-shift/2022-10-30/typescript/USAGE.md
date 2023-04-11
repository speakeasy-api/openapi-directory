<!-- Start SDK Example Usage -->
```typescript
import {
  CancelZonalShiftRequest,
  CancelZonalShiftResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelZonalShiftRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  zonalShiftId: "illum",
};

sdk.cancelZonalShift(req).then((res: CancelZonalShiftResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->