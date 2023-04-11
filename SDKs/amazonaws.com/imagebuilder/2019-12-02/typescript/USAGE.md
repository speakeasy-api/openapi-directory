<!-- Start SDK Example Usage -->
```typescript
import {
  CancelImageCreationRequest,
  CancelImageCreationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CancelImageCreationRequest = {
  requestBody: {
    clientToken: "corrupti",
    imageBuildVersionArn: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.cancelImageCreation(req).then((res: CancelImageCreationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->