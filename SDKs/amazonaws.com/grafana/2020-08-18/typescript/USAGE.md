<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateLicenseRequest,
  AssociateLicenseResponse,
  AssociateLicenseLicenseTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateLicenseRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  licenseType: AssociateLicenseLicenseTypeEnum.EnterpriseFreeTrial,
  workspaceId: "vel",
};

sdk.associateLicense(req).then((res: AssociateLicenseResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->