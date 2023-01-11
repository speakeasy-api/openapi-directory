<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostOauthAccessTokenRequest, PostOauthAccessTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostOauthAccessTokenRequest = {
  request: "sit",
};

sdk.auth.postOauthAccessToken(req).then((res: PostOauthAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->