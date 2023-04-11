<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDestinationRequest,
  CreateDestinationResponse,
  CreateDestinationRequestBodyStateEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateDestinationRequest = {
  requestBody: {
    additionalFixedProperties: "corrupti",
    clientToken: "provident",
    name: "distinctio",
    site: "quibusdam",
    state: CreateDestinationRequestBodyStateEnum.Disabled,
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.createDestination(req).then((res: CreateDestinationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->