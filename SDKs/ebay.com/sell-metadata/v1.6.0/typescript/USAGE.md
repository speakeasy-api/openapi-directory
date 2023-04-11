<!-- Start SDK Example Usage -->
```typescript
import {
  GetSalesTaxJurisdictionsRequest,
  GetSalesTaxJurisdictionsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetSalesTaxJurisdictionsRequest = {
  countryCode: "corrupti",
};

sdk.country.getSalesTaxJurisdictions(req).then((res: GetSalesTaxJurisdictionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->