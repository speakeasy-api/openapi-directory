<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { CreateArtifactRuleRequest, CreateArtifactRuleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateArtifactRuleRequest = {
  pathParams: {
    artifactId: "sit",
  },
  request: {
    config: "voluptas",
    type: "COMPATIBILITY",
  },
};

sdk.artifactRules.createArtifactRule(req).then((res: CreateArtifactRuleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->