<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { BatchGetRecordRequest, BatchGetRecordResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchGetRecordRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
  },
  request: {
    identifiers: [
      {
        featureGroupName: "fugit",
        featureNames: [
          "nihil",
        ],
        recordIdentifiersValueAsString: [
          "dicta",
          "debitis",
          "voluptatum",
        ],
      },
      {
        featureGroupName: "et",
        featureNames: [
          "dolorem",
          "et",
          "voluptate",
        ],
        recordIdentifiersValueAsString: [
          "vitae",
          "totam",
          "dolores",
        ],
      },
      {
        featureGroupName: "illum",
        featureNames: [
          "vel",
        ],
        recordIdentifiersValueAsString: [
          "dolore",
        ],
      },
    ],
  },
};

sdk.batchGetRecord(req).then((res: BatchGetRecordResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->