<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteRiddleRequest,
  DeleteRiddleResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteRiddleRequest = {
  id: "corrupti",
};

sdk.privateRiddles.deleteRiddle(req).then((res: DeleteRiddleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->