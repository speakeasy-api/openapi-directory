<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetBarcodeDecodeTypesRequest, GetBarcodeDecodeTypesResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetBarcodeDecodeTypesRequest = {
  security: {
    xFungeneratorsApiSecret: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
};

sdk.barcode.getBarcodeDecodeTypes(req).then((res: GetBarcodeDecodeTypesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->