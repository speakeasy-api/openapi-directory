<!-- Start SDK Example Usage -->
```typescript
import {
  ApiResourceCoverageOneRequest,
  ApiResourceCoverageOneResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ApiResourceCoverageOneRequest = {
  id: "corrupti",
  resourceId: "provident",
  xApideckAppId: "distinctio",
};

sdk.apiResources.apiResourceCoverageOne(req).then((res: ApiResourceCoverageOneResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->