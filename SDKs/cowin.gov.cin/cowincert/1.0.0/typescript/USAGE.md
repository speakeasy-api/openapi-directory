<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CertificateRequest,
  GetCertificatePdfResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CertificateRequest = {
  beneficiaryId: "corrupti",
  mobile: "(786) 858-4663 x4280",
};

sdk.certificate.getCertificatePdf(req).then((res: GetCertificatePdfResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->