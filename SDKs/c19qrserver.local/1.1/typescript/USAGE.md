<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteSigninSigninIdRequest,
  DeleteSigninSigninIdResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    tokenHeader: "YOUR_API_KEY_HERE",
  },
});

const req: DeleteSigninSigninIdRequest = {
  signinId: 1,
};

sdk.attendeesSignins.deleteSigninSigninId(req).then((res: DeleteSigninSigninIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->