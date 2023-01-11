<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetContentproSearchRequest, GetContentproSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetContentproSearchRequest = {
  queryParams: {
    terms: "sit",
  },
};

sdk.contentproSearch.getContentproSearch(req).then((res: GetContentproSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->