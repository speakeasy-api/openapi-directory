<!-- Start SDK Example Usage -->
```typescript
import {
  GetFoodBrandedBarcodePhpRequest,
  GetFoodBrandedBarcodePhpResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFoodBrandedBarcodePhpRequest = {
  code: "corrupti",
};

sdk.getFoodBrandedBarcodePhp(req).then((res: GetFoodBrandedBarcodePhpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->