<!-- Start SDK Example Usage -->
```typescript
import {
  GetSearchRequest,
  GetSearchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetSearchRequest = {
  q: "corrupti",
};

sdk.rating.getSearch(req).then((res: GetSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->