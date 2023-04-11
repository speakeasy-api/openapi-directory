<!-- Start SDK Example Usage -->
```typescript
import {
  GetActionNotificationExportResultsRequest,
  GetActionNotificationExportResultsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetActionNotificationExportResultsRequest = {
  actionNotificationExportId: 548814,
  cursor: "provident",
  perPage: 715190,
  userId: 844266,
};

sdk.actionNotificationExportResults.getActionNotificationExportResults(req).then((res: GetActionNotificationExportResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->