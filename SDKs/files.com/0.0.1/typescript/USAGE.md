<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetActionNotificationExportResultsRequest, GetActionNotificationExportResultsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetActionNotificationExportResultsRequest = {
  queryParams: {
    actionNotificationExportId: 8717895732742165505,
    cursor: "voluptas",
    perPage: 6050128673802995827,
    userId: 501233450539197794,
  },
};

sdk.actionNotificationExportResults.getActionNotificationExportResults(req).then((res: GetActionNotificationExportResultsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->