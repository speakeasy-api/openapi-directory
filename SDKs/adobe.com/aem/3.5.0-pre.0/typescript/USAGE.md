<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetAemProductInfoResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    aemAuth: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  }
));

sdk.console.getAemProductInfo().then((res: GetAemProductInfoResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->