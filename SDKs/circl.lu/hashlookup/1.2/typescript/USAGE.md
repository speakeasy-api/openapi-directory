<!-- Start SDK Example Usage -->
```typescript
import {
  GetChildrenRequest,
  GetChildrenResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetChildrenRequest = {
  count: 548814,
  cursor: "provident",
  sha1: "distinctio",
};

sdk.default.getChildren(req).then((res: GetChildrenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->