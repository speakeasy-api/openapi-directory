<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetRecordRequest,
  BatchGetRecordResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetRecordRequest = {
  requestBody: {
    identifiers: [
      {
        featureGroupName: "provident",
        featureNames: [
          "quibusdam",
          "unde",
          "nulla",
        ],
        recordIdentifiersValueAsString: [
          "illum",
          "vel",
          "error",
        ],
      },
      {
        featureGroupName: "deserunt",
        featureNames: [
          "iure",
          "magnam",
        ],
        recordIdentifiersValueAsString: [
          "ipsa",
          "delectus",
          "tempora",
          "suscipit",
        ],
      },
      {
        featureGroupName: "molestiae",
        featureNames: [
          "placeat",
          "voluptatum",
          "iusto",
          "excepturi",
        ],
        recordIdentifiersValueAsString: [
          "recusandae",
          "temporibus",
        ],
      },
    ],
  },
  xAmzAlgorithm: "ab",
  xAmzContentSha256: "quis",
  xAmzCredential: "veritatis",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "perferendis",
  xAmzSignature: "ipsam",
  xAmzSignedHeaders: "repellendus",
};

sdk.batchGetRecord(req).then((res: BatchGetRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->