<!-- Start SDK Example Usage -->
```typescript
import {
  GetSearchV1FieldsRequest,
  GetSearchV1FieldsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetSearchV1FieldsRequest = {
  callback: "corrupti",
};

sdk.getSearchV1Fields(req).then((res: GetSearchV1FieldsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->