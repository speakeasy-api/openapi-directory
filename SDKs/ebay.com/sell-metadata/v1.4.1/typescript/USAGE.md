<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetSalesTaxJurisdictionsRequest, GetSalesTaxJurisdictionsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetSalesTaxJurisdictionsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    countryCode: "sit",
  },
};

sdk.country.getSalesTaxJurisdictions(req).then((res: GetSalesTaxJurisdictionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->