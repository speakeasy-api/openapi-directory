<!-- Start SDK Example Usage -->
```typescript
import {
  GetReisezentrenRequest,
  GetReisezentrenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetReisezentrenRequest = {
  name: "corrupti",
};

sdk.getReisezentren(req).then((res: GetReisezentrenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->