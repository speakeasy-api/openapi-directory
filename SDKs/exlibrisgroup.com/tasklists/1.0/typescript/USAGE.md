<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAlmawsV1TaskListsRsLendingRequestsRequest, GetAlmawsV1TaskListsRsLendingRequestsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetAlmawsV1TaskListsRsLendingRequestsRequest = {
  queryParams: {
    library: "sit",
    partner: "voluptas",
    printed: "culpa",
    reported: "expedita",
    requestedFormat: "consequuntur",
    status: "dolor",
    suppliedFormat: "expedita",
  },
};

sdk.lendingRequests.getAlmawsV1TaskListsRsLendingRequests(req).then((res: GetAlmawsV1TaskListsRsLendingRequestsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->