<!-- Start SDK Example Usage -->
```typescript
import {
  shared.Rule,
  CreateGlobalRuleResponse
} from "openapi/dist/sdk/models/operations";
import {
  RuleTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.Rule = {
  config: "corrupti",
  type: RuleTypeEnum.Validity,
};

sdk.admin.createGlobalRule(req).then((res: CreateGlobalRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->