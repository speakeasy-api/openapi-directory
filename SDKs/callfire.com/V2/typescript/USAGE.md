<!-- Start SDK Example Usage -->
```typescript
import {
  AddCallBroadcastBatchRequest,
  AddCallBroadcastBatchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AddCallBroadcastBatchRequest = {
  batchRequest: {
    contactListId: 548814,
    name: "provident",
    recipients: [
      {
        attributes: {
          "unde": "nulla",
          "corrupti": "illum",
          "vel": "error",
          "deserunt": "suscipit",
        },
        contactId: 437587,
        fromNumber: "magnam",
        phoneNumber: "debitis",
      },
      {
        attributes: {
          "delectus": "tempora",
        },
        contactId: 383441,
        fromNumber: "molestiae",
        phoneNumber: "minus",
      },
      {
        attributes: {
          "voluptatum": "iusto",
          "excepturi": "nisi",
          "recusandae": "temporibus",
          "ab": "quis",
        },
        contactId: 87129,
        fromNumber: "deserunt",
        phoneNumber: "perferendis",
      },
    ],
    scrubDuplicates: false,
  },
  id: 368241,
  strictValidation: false,
};

sdk.calls.addCallBroadcastBatch(req).then((res: AddCallBroadcastBatchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->