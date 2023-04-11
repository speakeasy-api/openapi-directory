<!-- Start SDK Example Usage -->
```typescript
import {
  ConfigConfigGetRequest,
  ConfigConfigGetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConfigConfigGetRequest = {
  authorization: "corrupti",
};

sdk.configConfigGet(req).then((res: ConfigConfigGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->