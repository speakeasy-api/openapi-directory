<!-- Start SDK Example Usage -->
```typescript
import {
  AddCustomRoutingEndpointsRequest,
  AddCustomRoutingEndpointsResponse,
  AddCustomRoutingEndpointsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddCustomRoutingEndpointsRequest = {
  addCustomRoutingEndpointsRequest: {
    endpointConfigurations: [
      {
        endpointId: "provident",
      },
      {
        endpointId: "distinctio",
      },
      {
        endpointId: "quibusdam",
      },
    ],
    endpointGroupArn: "unde",
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: AddCustomRoutingEndpointsXAmzTargetEnum.GlobalAcceleratorV20180706AddCustomRoutingEndpoints,
};

sdk.addCustomRoutingEndpoints(req).then((res: AddCustomRoutingEndpointsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->