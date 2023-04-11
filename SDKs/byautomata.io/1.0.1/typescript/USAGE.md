<!-- Start SDK Example Usage -->
```typescript
import {
  GetContentproSearchRequest,
  GetContentproSearchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetContentproSearchRequest = {
  terms: "corrupti",
};

sdk.contentproSearch.getContentproSearch(req).then((res: GetContentproSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->