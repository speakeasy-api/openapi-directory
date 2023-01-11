<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostGetOnboardingUrlRequest, PostGetOnboardingUrlResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostGetOnboardingUrlRequest = {
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: "sit",
};

sdk.hostedOnboardingPage.postGetOnboardingUrl(req).then((res: PostGetOnboardingUrlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->