<!-- Start SDK Example Usage -->
```typescript
import {
  CrmCheckRequest,
  CrmCheckResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: CrmCheckRequest = {
  apiKey: "corrupti",
  saleDate: "provident",
  vin: "distinctio",
};

sdk.crmCleanseAPI.crmCheck(req).then((res: CrmCheckResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->