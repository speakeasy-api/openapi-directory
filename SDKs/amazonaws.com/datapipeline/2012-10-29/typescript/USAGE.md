<!-- Start SDK Example Usage -->
```typescript
import {
  ActivatePipelineRequest,
  ActivatePipelineResponse,
  ActivatePipelineXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ActivatePipelineRequest = {
  activatePipelineInput: {
    parameterValues: [
      {
        id: "provident",
        stringValue: "distinctio",
      },
      {
        id: "quibusdam",
        stringValue: "unde",
      },
      {
        id: "nulla",
        stringValue: "corrupti",
      },
    ],
    pipelineId: "illum",
    startTimestamp: "2022-05-18T09:34:54.894Z",
  },
  xAmzAlgorithm: "deserunt",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "iure",
  xAmzDate: "magnam",
  xAmzSecurityToken: "debitis",
  xAmzSignature: "ipsa",
  xAmzSignedHeaders: "delectus",
  xAmzTarget: ActivatePipelineXAmzTargetEnum.DataPipelineActivatePipeline,
};

sdk.activatePipeline(req).then((res: ActivatePipelineResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->