<!-- Start SDK Example Usage -->
```typescript
import {
  AppDGETRequest,
  AppDGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AppDGETRequest = {
  allFields: "corrupti",
  appDId: "provident",
  excludeDefault: "distinctio",
  excludeFields: "quibusdam",
  fields: "unde",
  filter: "nulla",
};

sdk.appPkgm.appDGET(req).then((res: AppDGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->