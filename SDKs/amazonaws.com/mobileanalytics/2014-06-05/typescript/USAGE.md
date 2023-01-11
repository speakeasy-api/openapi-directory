<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PutEventsRequest, PutEventsResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: PutEventsRequest = {
  headers: {
    xAmzAlgorithm: "sit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "culpa",
    xAmzDate: "expedita",
    xAmzSecurityToken: "consequuntur",
    xAmzSignature: "dolor",
    xAmzSignedHeaders: "expedita",
    xAmzClientContext: "voluptas",
    xAmzClientContextEncoding: "fugit",
  },
  request: {
    events: [
      {
        attributes: {
          "rerum": "dicta",
        },
        eventType: "debitis",
        metrics: {
          "et": 11.100000,
        },
        session: {
          duration: 7259475919510918339,
          id: "voluptate",
          startTimestamp: "iste",
          stopTimestamp: "vitae",
        },
        timestamp: "totam",
        version: "dolores",
      },
    ],
  },
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->