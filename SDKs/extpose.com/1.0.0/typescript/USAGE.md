<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetUserExtensionsRequest, GetUserExtensionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetUserExtensionsRequest = {
  security: {
    apiKey: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
};

sdk.user.getUserExtensions(req).then((res: GetUserExtensionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->