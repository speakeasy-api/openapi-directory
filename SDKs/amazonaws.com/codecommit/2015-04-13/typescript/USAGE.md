<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AssociateApprovalRuleTemplateWithRepositoryRequest, AssociateApprovalRuleTemplateWithRepositoryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateApprovalRuleTemplateWithRepositoryRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzTarget: "CodeCommit_20150413.AssociateApprovalRuleTemplateWithRepository",
  },
  request: {
    approvalRuleTemplateName: "fugit",
    repositoryName: "et",
  },
};

sdk.associateApprovalRuleTemplateWithRepository(req).then((res: AssociateApprovalRuleTemplateWithRepositoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->