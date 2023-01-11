<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest, ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgRequest = {
  pathParams: {
    org: "sit",
    repositoryId: 2259404117704393152,
    runnerGroupId: 6050128673802995827,
  },
};

sdk.actions.actionsAddRepoAccessToSelfHostedRunnerGroupInOrg(req).then((res: ActionsAddRepoAccessToSelfHostedRunnerGroupInOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->