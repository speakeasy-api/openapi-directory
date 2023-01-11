<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BulkCreateAdsByInventoryReferenceRequest, BulkCreateAdsByInventoryReferenceResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: BulkCreateAdsByInventoryReferenceRequest = {
  security: {
    apiAuth: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    campaignId: "sit",
  },
  request: {
    requests: [
      {
        bidPercentage: "culpa",
        inventoryReferenceId: "expedita",
        inventoryReferenceType: "consequuntur",
      },
    ],
  },
};

sdk.ad.bulkCreateAdsByInventoryReference(req).then((res: BulkCreateAdsByInventoryReferenceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->