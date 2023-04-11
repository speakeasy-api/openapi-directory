<!-- Start SDK Example Usage -->
```typescript
import {
  GetAuditlogsRequest,
  GetAuditlogsResponse,
  GetAuditlogsAuditLogTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: GetAuditlogsRequest = {
  auditLogType: GetAuditlogsAuditLogTypeEnum.IntegrationLinkAdded,
  configId: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
  environmentId: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
  fromUtcDateTime: "2022-02-02T00:14:45.467Z",
  productId: "39205929-396f-4ea7-996e-b10faaa2352c",
  toUtcDateTime: "2022-05-24T03:24:11.703Z",
};

sdk.auditLogs.getAuditlogs(req).then((res: GetAuditlogsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->