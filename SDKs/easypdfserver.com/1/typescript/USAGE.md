<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostMakePdfRequest, PostMakePdfResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostMakePdfRequest = {
  request: {
    html: "sit",
    key: "voluptas",
    url: "culpa",
  },
};

sdk.postMakePdf(req).then((res: PostMakePdfResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->