<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { KeywordSearchRequest, KeywordSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: KeywordSearchRequest = {
  queryParams: {
    domainCode: "sit",
    keyword: "voluptas",
    numberOfProducts: 6050128673802995827,
    sortBy: "expedita",
  },
};

sdk.amz.keywordSearch(req).then((res: KeywordSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->