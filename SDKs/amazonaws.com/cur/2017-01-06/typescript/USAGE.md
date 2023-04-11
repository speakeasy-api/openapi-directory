<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteReportDefinitionRequest,
  DeleteReportDefinitionResponse,
  DeleteReportDefinitionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteReportDefinitionRequest = {
  deleteReportDefinitionRequest: {
    reportName: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: DeleteReportDefinitionXAmzTargetEnum.AWSOrigamiServiceGatewayServiceDeleteReportDefinition,
};

sdk.deleteReportDefinition(req).then((res: DeleteReportDefinitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->