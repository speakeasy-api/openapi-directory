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
  },
  request: {
    eventList: [
      {
        eventId: "fugit",
        eventType: "et",
        eventValue: 68.199997,
        impression: [
          "debitis",
          "voluptatum",
          "et",
        ],
        itemId: "ut",
        properties: "dolorem",
        recommendationId: "et",
        sentAt: "1998-09-30T11:01:25Z",
      },
      {
        eventId: "vitae",
        eventType: "totam",
        eventValue: 80.199997,
        impression: [
          "vel",
        ],
        itemId: "odio",
        properties: "dolore",
        recommendationId: "id",
        sentAt: "2015-12-03T16:44:03Z",
      },
      {
        eventId: "accusantium",
        eventType: "totam",
        eventValue: 64.099998,
        impression: [
          "aut",
          "odit",
        ],
        itemId: "non",
        properties: "voluptas",
        recommendationId: "omnis",
        sentAt: "2015-03-08T17:52:36Z",
      },
    ],
    sessionId: "illo",
    trackingId: "sed",
    userId: "officiis",
  },
};

sdk.putEvents(req).then((res: PutEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->