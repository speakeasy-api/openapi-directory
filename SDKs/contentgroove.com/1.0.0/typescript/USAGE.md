<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteApiV1ClipsIdRequest,
  DeleteApiV1ClipsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteApiV1ClipsIdRequest = {
  id: "corrupti",
};

sdk.deleteApiV1ClipsId(req).then((res: DeleteApiV1ClipsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->