<!-- Start SDK Example Usage -->
```typescript
import {
  AccountArticleReportRequest,
  AccountArticleReportResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AccountArticleReportRequest = {
  groupId: 548814,
};

sdk.articles.accountArticleReport(req).then((res: AccountArticleReportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->