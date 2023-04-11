<!-- Start SDK Example Usage -->
```typescript
import {
  GetServiceSettingsRequest,
  GetServiceSettingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetServiceSettingsRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
};

sdk.getServiceSettings(req).then((res: GetServiceSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->