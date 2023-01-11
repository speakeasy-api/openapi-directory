<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { ListRealtimeContactAnalysisSegmentsRequest, ListRealtimeContactAnalysisSegmentsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: ListRealtimeContactAnalysisSegmentsRequest = {
  queryParams: {
    maxResults: "sit",
    nextToken: "voluptas",
  },
  headers: {
    xAmzAlgorithm: "culpa",
    xAmzContentSha256: "expedita",
    xAmzCredential: "consequuntur",
    xAmzDate: "dolor",
    xAmzSecurityToken: "expedita",
    xAmzSignature: "voluptas",
    xAmzSignedHeaders: "fugit",
  },
  request: {
    contactId: "et",
    instanceId: "nihil",
    maxResults: 8325060299420976708,
    nextToken: "dicta",
  },
};

sdk.listRealtimeContactAnalysisSegments(req).then((res: ListRealtimeContactAnalysisSegmentsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->