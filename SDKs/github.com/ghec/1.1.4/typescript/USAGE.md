<!-- Start SDK Example Usage -->
```typescript
import {
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest,
  ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ActionsAddCustomLabelsToSelfHostedRunnerForOrgRequest = {
  requestBody: {
    labels: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
  },
  org: "unde",
  runnerId: 857946,
};

sdk.actions.actionsAddCustomLabelsToSelfHostedRunnerForOrg(req).then((res: ActionsAddCustomLabelsToSelfHostedRunnerForOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->