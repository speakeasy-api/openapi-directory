<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteSigninSigninIdRequest, DeleteSigninSigninIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    tokenHeader: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DeleteSigninSigninIdRequest = {
  pathParams: {
    signinId: 8717895732742165505,
  },
};

sdk.attendeesSignins.deleteSigninSigninId(req).then((res: DeleteSigninSigninIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->