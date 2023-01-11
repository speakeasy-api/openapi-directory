<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateGlobalRuleRequest, CreateGlobalRuleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateGlobalRuleRequest = {
  request: {
    config: "sit",
    type: "VALIDITY",
  },
};

sdk.admin.createGlobalRule(req).then((res: CreateGlobalRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->