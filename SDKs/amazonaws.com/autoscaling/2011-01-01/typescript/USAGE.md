<!-- Start SDK Example Usage -->
```typescript
import {
  GETAttachInstancesRequest,
  GETAttachInstancesResponse,
  GETAttachInstancesActionEnum,
  GETAttachInstancesVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETAttachInstancesRequest = {
  action: GETAttachInstancesActionEnum.AttachInstances,
  autoScalingGroupName: "corrupti",
  instanceIds: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  version: GETAttachInstancesVersionEnum.TwoThousandAndEleven0101,
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.getAttachInstances(req).then((res: GETAttachInstancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->