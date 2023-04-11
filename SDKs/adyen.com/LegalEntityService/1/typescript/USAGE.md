<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteBusinessLinesIdRequest,
  DeleteBusinessLinesIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteBusinessLinesIdRequest = {
  id: "corrupti",
};

sdk.businessLines.deleteBusinessLinesId(req).then((res: DeleteBusinessLinesIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->