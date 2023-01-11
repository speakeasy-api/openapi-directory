<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAuditlogsRequest, GetAuditlogsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basic: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: GetAuditlogsRequest = {
  pathParams: {
    productId: "sit",
  },
  queryParams: {
    auditLogType: {
      "culpa": "expedita",
    },
    configId: "consequuntur",
    environmentId: "dolor",
    fromUtcDateTime: "2009-11-26T21:53:53Z",
    toUtcDateTime: "1978-05-28T16:08:43Z",
  },
};

sdk.auditLogs.getAuditlogs(req).then((res: GetAuditlogsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->