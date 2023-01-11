<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccountArticleReportRequest, AccountArticleReportResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountArticleReportRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    groupId: 8717895732742165505,
  },
};

sdk.articles.accountArticleReport(req).then((res: AccountArticleReportResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->