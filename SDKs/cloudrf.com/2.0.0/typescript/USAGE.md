<!-- Start SDK Example Usage -->
```typescript
import {
  InterferenceRequest,
  InterferenceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: InterferenceRequest = {
  name: "corrupti",
  network: "provident",
};

sdk.analyse.interference(req).then((res: InterferenceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->