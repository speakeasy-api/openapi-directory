<!-- Start SDK Example Usage -->
```typescript
import {
  ActivateEventSourceRequest,
  ActivateEventSourceResponse,
  ActivateEventSourceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ActivateEventSourceRequest = {
  activateEventSourceRequest: {
    name: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: ActivateEventSourceXAmzTargetEnum.AWSEventsActivateEventSource,
};

sdk.activateEventSource(req).then((res: ActivateEventSourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->