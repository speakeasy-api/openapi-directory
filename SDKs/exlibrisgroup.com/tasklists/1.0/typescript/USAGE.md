<!-- Start SDK Example Usage -->
```typescript
import {
  GetAlmawsV1TaskListsRsLendingRequestsRequest,
  GetAlmawsV1TaskListsRsLendingRequestsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: GetAlmawsV1TaskListsRsLendingRequestsRequest = {
  library: "corrupti",
  partner: "provident",
  printed: "distinctio",
  reported: "quibusdam",
  requestedFormat: "unde",
  status: "nulla",
  suppliedFormat: "corrupti",
};

sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req).then((res: GetAlmawsV1TaskListsRsLendingRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->