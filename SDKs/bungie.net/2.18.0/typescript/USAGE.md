<!-- Start SDK Example Usage -->
```typescript
import {
  DotGetAvailableLocalesResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

sdk.dotGetAvailableLocales().then((res: DotGetAvailableLocalesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->