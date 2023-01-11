<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostAuthOauthTokenRequest, PostAuthOauthTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostAuthOauthTokenRequest = {
  request: {
    clientId: "sit",
    clientSecret: "voluptas",
    grantType: "culpa",
    scope: "expedita",
  },
};

sdk.auth.postAuthOauthToken(req).then((res: PostAuthOauthTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->