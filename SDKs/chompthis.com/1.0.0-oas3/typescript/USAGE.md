<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetFoodBrandedBarcodePhpRequest, GetFoodBrandedBarcodePhpResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetFoodBrandedBarcodePhpRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  queryParams: {
    code: "sit",
  },
};

sdk.getFoodBrandedBarcodePhp(req).then((res: GetFoodBrandedBarcodePhpResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->