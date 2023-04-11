<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CheckoutUtilityRequest,
  PostOriginKeysResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CheckoutUtilityRequest = {
  originDomains: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
};

sdk.postOriginKeys(req).then((res: PostOriginKeysResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->