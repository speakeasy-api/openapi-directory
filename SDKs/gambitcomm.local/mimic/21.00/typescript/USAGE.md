<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { AccessAddRequest, AccessAddResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    basicAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));
    
const req: AccessAddRequest = {
  pathParams: {
    agents: "sit",
    mask: "voluptas",
    user: "culpa",
  },
};

sdk.access.accessAdd(req).then((res: AccessAddResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->