<!-- Start SDK Example Usage -->
```typescript
import {
  shared.SubjectErasureByPspReferenceRequest,
  PostRequestSubjectErasureResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.SubjectErasureByPspReferenceRequest = {
  forceErasure: false,
  merchantAccount: "corrupti",
  pspReference: "provident",
};

sdk.general.postRequestSubjectErasure(req).then((res: PostRequestSubjectErasureResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->