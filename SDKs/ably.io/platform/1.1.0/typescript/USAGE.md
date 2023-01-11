<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { RequestAccessTokenRequest, RequestAccessTokenResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: RequestAccessTokenRequest = {
  pathParams: {
    keyName: "sit",
  },
  queryParams: {
    format: "msgpack",
  },
  headers: {
    xAblyVersion: "culpa",
  },
  request: "expedita",
};

sdk.authentication.requestAccessToken(req).then((res: RequestAccessTokenResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->