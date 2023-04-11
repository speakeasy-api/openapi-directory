<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateBrowserSettingsRequest,
  AssociateBrowserSettingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateBrowserSettingsRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  browserSettingsArn: "illum",
  portalArn: "vel",
};

sdk.associateBrowserSettings(req).then((res: AssociateBrowserSettingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->