<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteAssignmentsIdRequest,
  DeleteAssignmentsIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteAssignmentsIdRequest = {
  id: "corrupti",
};

sdk.assignment.deleteAssignmentsId(req).then((res: DeleteAssignmentsIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->