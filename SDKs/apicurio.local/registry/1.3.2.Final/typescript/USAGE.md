<!-- Start SDK Example Usage -->
```typescript
import {
  CreateArtifactRuleRequest,
  CreateArtifactRuleResponse
} from "openapi/dist/sdk/models/operations";
import {
  RuleTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateArtifactRuleRequest = {
  rule: {
    config: "corrupti",
    type: RuleTypeEnum.Validity,
  },
  artifactId: "provident",
};

sdk.artifactRules.createArtifactRule(req).then((res: CreateArtifactRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->