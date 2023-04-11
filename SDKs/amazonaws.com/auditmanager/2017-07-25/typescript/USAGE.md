<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAssessmentReportEvidenceFolderRequest,
  AssociateAssessmentReportEvidenceFolderResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAssessmentReportEvidenceFolderRequest = {
  requestBody: {
    evidenceFolderId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  assessmentId: "vel",
};

sdk.associateAssessmentReportEvidenceFolder(req).then((res: AssociateAssessmentReportEvidenceFolderResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->