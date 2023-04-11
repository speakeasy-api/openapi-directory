<!-- Start SDK Example Usage -->
```typescript
import {
  GETAddSourceIdentifierToSubscriptionRequest,
  GETAddSourceIdentifierToSubscriptionResponse,
  GETAddSourceIdentifierToSubscriptionActionEnum,
  GETAddSourceIdentifierToSubscriptionVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAddSourceIdentifierToSubscriptionRequest = {
  action: GETAddSourceIdentifierToSubscriptionActionEnum.AddSourceIdentifierToSubscription,
  sourceIdentifier: "corrupti",
  subscriptionName: "provident",
  version: GETAddSourceIdentifierToSubscriptionVersionEnum.TwoThousandAndFourteen1031,
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.getAddSourceIdentifierToSubscription(req).then((res: GETAddSourceIdentifierToSubscriptionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->