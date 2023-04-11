<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateServiceQuotaTemplateRequest,
  AssociateServiceQuotaTemplateResponse,
  AssociateServiceQuotaTemplateXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateServiceQuotaTemplateRequest = {
  requestBody: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
  xAmzTarget: AssociateServiceQuotaTemplateXAmzTargetEnum.ServiceQuotasV20190624AssociateServiceQuotaTemplate,
};

sdk.associateServiceQuotaTemplate(req).then((res: AssociateServiceQuotaTemplateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->