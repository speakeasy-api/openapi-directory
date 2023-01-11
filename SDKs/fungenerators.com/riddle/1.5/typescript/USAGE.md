<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteRiddleRequest, DeleteRiddleResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteRiddleRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    id: "sit",
  },
};

sdk.privateRiddles.deleteRiddle(req).then((res: DeleteRiddleResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->