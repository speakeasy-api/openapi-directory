<!-- Start SDK Example Usage -->
```typescript
import {
  ClientApiAllRequest,
  ClientApiAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ClientApiAllRequest = {
  xAuthKey: "corrupti",
  xAuthSecret: "provident",
};

sdk.client.clientApiAll(req).then((res: ClientApiAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->