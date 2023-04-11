<!-- Start SDK Example Usage -->
```typescript
import {
  PutEventsRequest,
  PutEventsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: PutEventsRequest = {
  requestBody: {
    events: [
      {
        attributes: {
          "distinctio": "quibusdam",
          "unde": "nulla",
          "corrupti": "illum",
        },
        eventType: "vel",
        metrics: {
          "deserunt": 3843.82,
          "iure": 2975.34,
          "debitis": 567.13,
        },
        session: {
          duration: 963663,
          id: "tempora",
          startTimestamp: "suscipit",
          stopTimestamp: "molestiae",
        },
        timestamp: "minus",
        version: "placeat",
      },
      {
        attributes: {
          "iusto": "excepturi",
          "nisi": "recusandae",
          "temporibus": "ab",
        },
        eventType: "quis",
        metrics: {
          "deserunt": 202.18,
        },
        session: {
          duration: 368241,
          id: "repellendus",
          startTimestamp: "sapiente",
          stopTimestamp: "quo",
        },
        timestamp: "odit",
        version: "at",
      },
      {
        attributes: {
          "maiores": "molestiae",
          "quod": "quod",
          "esse": "totam",
          "porro": "dolorum",
        },
        eventType: "dicta",
        metrics: {
          "officia": 5820.2,
          "fugit": 5373.73,
          "hic": 7586.16,
        },
        session: {
          duration: 521848,
          id: "beatae",
          startTimestamp: "commodi",
          stopTimestamp: "molestiae",
        },
        timestamp: "modi",
        version: "qui",
      },
    ],
  },
  xAmzAlgorithm: "impedit",
  xAmzContentSha256: "cum",
  xAmzCredential: "esse",
  xAmzDate: "ipsum",
  xAmzSecurityToken: "excepturi",
  xAmzSignature: "aspernatur",
  xAmzSignedHeaders: "perferendis",
  xAmzClientContext: "ad",
  xAmzClientContextEncoding: "natus",
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->