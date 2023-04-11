<!-- Start SDK Example Usage -->
```typescript
import {
  BulkCreateAdsByInventoryReferenceRequest,
  BulkCreateAdsByInventoryReferenceResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: BulkCreateAdsByInventoryReferenceRequest = {
  bulkCreateAdsByInventoryReferenceRequest: {
    requests: [
      {
        adGroupId: "provident",
        bidPercentage: "distinctio",
        inventoryReferenceId: "quibusdam",
        inventoryReferenceType: "unde",
      },
      {
        adGroupId: "nulla",
        bidPercentage: "corrupti",
        inventoryReferenceId: "illum",
        inventoryReferenceType: "vel",
      },
      {
        adGroupId: "error",
        bidPercentage: "deserunt",
        inventoryReferenceId: "suscipit",
        inventoryReferenceType: "iure",
      },
    ],
  },
  campaignId: "magnam",
};

sdk.ad.bulkCreateAdsByInventoryReference(req).then((res: BulkCreateAdsByInventoryReferenceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->