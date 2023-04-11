<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateApprovalRuleTemplateWithRepositoryRequest,
  AssociateApprovalRuleTemplateWithRepositoryResponse,
  AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateApprovalRuleTemplateWithRepositoryRequest = {
  associateApprovalRuleTemplateWithRepositoryInput: {
    approvalRuleTemplateName: "corrupti",
    repositoryName: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum.CodeCommit20150413AssociateApprovalRuleTemplateWithRepository,
};

sdk.associateApprovalRuleTemplateWithRepository(req).then((res: AssociateApprovalRuleTemplateWithRepositoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->