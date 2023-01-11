<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostTransfersRequest, PostTransfersResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostTransfersRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: "sit",
};

sdk.general.postTransfers(req).then((res: PostTransfersResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->