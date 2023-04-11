<!-- Start SDK Example Usage -->
```typescript
import {
  GetAboutRequest,
  GetAboutResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetAboutRequest = {
  outputFormat: "corrupti",
};

sdk.getAbout(req).then((res: GetAboutResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->