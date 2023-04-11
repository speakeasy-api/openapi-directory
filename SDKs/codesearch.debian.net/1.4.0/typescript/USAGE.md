<!-- Start SDK Example Usage -->
```typescript
import {
  SearchRequest,
  SearchResponse,
  SearchMatchModeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SearchRequest = {
  matchMode: SearchMatchModeEnum.Regexp,
  query: "provident",
};

sdk.search.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->