<!-- Start SDK Example Usage -->
```typescript
import {
  KeywordSearchRequest,
  KeywordSearchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: KeywordSearchRequest = {
  domainCode: "corrupti",
  keyword: "provident",
  numberOfProducts: 715190,
  sortBy: "quibusdam",
};

sdk.amz.keywordSearch(req).then((res: KeywordSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->