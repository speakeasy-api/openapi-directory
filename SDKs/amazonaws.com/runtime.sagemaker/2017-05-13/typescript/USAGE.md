<!-- Start SDK Example Usage -->
```typescript
import {
  InvokeEndpointRequest,
  InvokeEndpointResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: InvokeEndpointRequest = {
  accept: "corrupti",
  contentType: "provident",
  endpointName: "distinctio",
  requestBody: {
    body: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmznSageMakerCustomAttributes: "suscipit",
  xAmznSageMakerEnableExplanations: "iure",
  xAmznSageMakerInferenceId: "magnam",
  xAmznSageMakerTargetContainerHostname: "debitis",
  xAmznSageMakerTargetModel: "ipsa",
  xAmznSageMakerTargetVariant: "delectus",
};

sdk.invokeEndpoint(req).then((res: InvokeEndpointResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->