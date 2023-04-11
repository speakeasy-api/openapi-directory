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
    eventList: [
      {
        eventId: "provident",
        eventType: "distinctio",
        eventValue: 8442.66,
        impression: [
          "nulla",
          "corrupti",
          "illum",
        ],
        itemId: "vel",
        metricAttribution: {
          eventAttributionSource: "error",
        },
        properties: "deserunt",
        recommendationId: "suscipit",
        sentAt: "2022-09-14T09:35:47.986Z",
      },
      {
        eventId: "debitis",
        eventType: "ipsa",
        eventValue: 9636.63,
        impression: [
          "suscipit",
          "molestiae",
        ],
        itemId: "minus",
        metricAttribution: {
          eventAttributionSource: "placeat",
        },
        properties: "voluptatum",
        recommendationId: "iusto",
        sentAt: "2022-03-20T06:24:36.919Z",
      },
      {
        eventId: "recusandae",
        eventType: "temporibus",
        eventValue: 710.36,
        impression: [
          "veritatis",
          "deserunt",
        ],
        itemId: "perferendis",
        metricAttribution: {
          eventAttributionSource: "ipsam",
        },
        properties: "repellendus",
        recommendationId: "sapiente",
        sentAt: "2022-07-31T07:34:52.790Z",
      },
    ],
    sessionId: "at",
    trackingId: "at",
    userId: "maiores",
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "quod",
  xAmzCredential: "quod",
  xAmzDate: "esse",
  xAmzSecurityToken: "totam",
  xAmzSignature: "porro",
  xAmzSignedHeaders: "dolorum",
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->