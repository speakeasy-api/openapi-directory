<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostOriginKeysRequest, PostOriginKeysResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostOriginKeysRequest = {
  request: "sit",
};

sdk.postOriginKeys(req).then((res: PostOriginKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->