<!-- Start SDK Example Usage -->
```typescript
import {
  GetLatestBaseCurrencyRequest,
  GetLatestBaseCurrencyResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetLatestBaseCurrencyRequest = {
  baseCurrency: "corrupti",
};

sdk.getLatestBaseCurrency(req).then((res: GetLatestBaseCurrencyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->