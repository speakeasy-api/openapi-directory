<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostRequestRequest, PostRequestResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostRequestRequest = {
  request: "sit",
};

sdk.postRequest(req).then((res: PostRequestResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->