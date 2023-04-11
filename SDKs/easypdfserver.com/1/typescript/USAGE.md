<!-- Start SDK Example Usage -->
```typescript
import {
  PostMakePdfRequestBody,
  PostMakePdfResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostMakePdfRequestBody = {
  html: "corrupti",
  key: "provident",
  url: "distinctio",
};

sdk.postMakePdf(req).then((res: PostMakePdfResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->