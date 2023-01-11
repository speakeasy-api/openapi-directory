<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { GetDealItemsRequest, GetDealItemsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetDealItemsRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    categoryIds: "sit",
    commissionable: "voluptas",
    deliveryCountry: "culpa",
    limit: "expedita",
    offset: "consequuntur",
  },
  headers: {
    xEBAYCMARKETPLACEID: "dolor",
  },
};

sdk.dealItem.getDealItems(req).then((res: GetDealItemsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->