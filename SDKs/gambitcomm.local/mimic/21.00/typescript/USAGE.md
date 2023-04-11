<!-- Start SDK Example Usage -->
```typescript
import {
  AccessAddRequest,
  AccessAddResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    password: "YOUR_PASSWORD_HERE",
    username: "YOUR_USERNAME_HERE",
  },
});

const req: AccessAddRequest = {
  agents: "corrupti",
  mask: "provident",
  user: "distinctio",
};

sdk.access.accessAdd(req).then((res: AccessAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->