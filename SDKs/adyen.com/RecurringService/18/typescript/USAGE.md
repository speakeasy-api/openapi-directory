<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostDisableRequest, PostDisableResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostDisableRequest = {
  request: "sit",
};

sdk.postDisable(req).then((res: PostDisableResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->