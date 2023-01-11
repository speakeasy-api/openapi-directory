<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetItemUsagesRequest, GetItemUsagesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetItemUsagesRequest = {
  security: {
    jwtsa: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: "sit",
};

sdk.apiV1.getItemUsages(req).then((res: GetItemUsagesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->