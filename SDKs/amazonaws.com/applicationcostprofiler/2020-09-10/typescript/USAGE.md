<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteReportDefinitionRequest,
  DeleteReportDefinitionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteReportDefinitionRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  reportId: "illum",
};

sdk.deleteReportDefinition(req).then((res: DeleteReportDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->