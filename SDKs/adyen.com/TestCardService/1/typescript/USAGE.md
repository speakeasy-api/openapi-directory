<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostCreateTestCardRangesRequest, PostCreateTestCardRangesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostCreateTestCardRangesRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.general.postCreateTestCardRanges(req).then((res: PostCreateTestCardRangesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->