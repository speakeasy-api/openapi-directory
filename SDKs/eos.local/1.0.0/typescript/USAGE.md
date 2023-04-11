<!-- Start SDK Example Usage -->
```typescript
import {
  ConnectRequestBody,
  ConnectResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConnectRequestBody = {
  endpoint: "corrupti",
};

sdk.connect(req).then((res: ConnectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->