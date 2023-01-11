<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SearchRequest, SearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SearchRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    matchMode: "literal",
    query: "voluptas",
  },
};

sdk.search.search(req).then((res: SearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->