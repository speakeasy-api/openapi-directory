<!-- Start SDK Example Usage -->
```typescript
import {
  BatchCheckLayerAvailabilityRequest,
  BatchCheckLayerAvailabilityResponse,
  BatchCheckLayerAvailabilityXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchCheckLayerAvailabilityRequest = {
  batchCheckLayerAvailabilityRequest: {
    layerDigests: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    registryId: "unde",
    repositoryName: "nulla",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: BatchCheckLayerAvailabilityXAmzTargetEnum.SpencerFrontendServiceBatchCheckLayerAvailability,
};

sdk.batchCheckLayerAvailability(req).then((res: BatchCheckLayerAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->