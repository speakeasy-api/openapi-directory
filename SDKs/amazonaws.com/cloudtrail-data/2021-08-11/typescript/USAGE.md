<!-- Start SDK Example Usage -->
```typescript
import {
  PutAuditEventsRequest,
  PutAuditEventsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: PutAuditEventsRequest = {
  requestBody: {
    auditEvents: [
      {
        eventData: "provident",
        eventDataChecksum: "distinctio",
        id: "quibusdam",
      },
      {
        eventData: "unde",
        eventDataChecksum: "nulla",
        id: "corrupti",
      },
      {
        eventData: "illum",
        eventDataChecksum: "vel",
        id: "error",
      },
    ],
  },
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
  channelArn: "tempora",
  externalId: "suscipit",
};

sdk.putAuditEvents(req).then((res: PutAuditEventsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->