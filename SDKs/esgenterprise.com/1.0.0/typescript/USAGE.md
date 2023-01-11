<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSearchRequest, GetSearchResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetSearchRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    q: "sit",
  },
};

sdk.rating.getSearch(req).then((res: GetSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->