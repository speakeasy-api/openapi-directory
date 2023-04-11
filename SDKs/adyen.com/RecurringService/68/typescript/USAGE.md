<!-- Start SDK Example Usage -->
```typescript
import {
  shared.CreatePermitRequest,
  PostCreatePermitResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.CreatePermitRequest = {
  merchantAccount: "corrupti",
  permits: [
    {
      partnerId: "distinctio",
      profileReference: "quibusdam",
      restriction: {
        maxAmount: {
          currency: "unde",
          value: 857946,
        },
        singleTransactionLimit: {
          currency: "corrupti",
          value: 847252,
        },
        singleUse: false,
      },
      resultKey: "vel",
      validTillDate: "2021-09-16T11:56:06.019Z",
    },
    {
      partnerId: "suscipit",
      profileReference: "iure",
      restriction: {
        maxAmount: {
          currency: "magnam",
          value: 891773,
        },
        singleTransactionLimit: {
          currency: "ipsa",
          value: 963663,
        },
        singleUse: false,
      },
      resultKey: "tempora",
      validTillDate: "2022-07-10T15:39:12.517Z",
    },
    {
      partnerId: "minus",
      profileReference: "placeat",
      restriction: {
        maxAmount: {
          currency: "voluptatum",
          value: 479977,
        },
        singleTransactionLimit: {
          currency: "excepturi",
          value: 392785,
        },
        singleUse: false,
      },
      resultKey: "recusandae",
      validTillDate: "2022-10-15T05:10:19.629Z",
    },
  ],
  recurringDetailReference: "quis",
  shopperReference: "veritatis",
};

sdk.general.postCreatePermit(req).then((res: PostCreatePermitResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->