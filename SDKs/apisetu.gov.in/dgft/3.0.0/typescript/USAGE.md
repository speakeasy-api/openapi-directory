<!-- Start SDK Example Usage -->
```typescript
import {
  ImporterExporterCodeVerificationAPIRequest,
  ImporterExporterCodeVerificationAPIResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ImporterExporterCodeVerificationAPIRequest = {
  iec: "corrupti",
};

sdk.apIs.importerExporterCodeVerificationAPI(req).then((res: ImporterExporterCodeVerificationAPIResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->