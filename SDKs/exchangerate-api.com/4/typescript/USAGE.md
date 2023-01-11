<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetLatestBaseCurrencyRequest, GetLatestBaseCurrencyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetLatestBaseCurrencyRequest = {
  pathParams: {
    baseCurrency: "sit",
  },
};

sdk.getLatestBaseCurrency(req).then((res: GetLatestBaseCurrencyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->