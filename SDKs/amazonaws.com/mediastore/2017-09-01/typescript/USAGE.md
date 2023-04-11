<!-- Start SDK Example Usage -->
```typescript
import {
  CreateContainerRequest,
  CreateContainerResponse,
  CreateContainerXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateContainerRequest = {
  createContainerInput: {
    containerName: "corrupti",
    tags: [
      {
        key: "distinctio",
        value: "quibusdam",
      },
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: CreateContainerXAmzTargetEnum.MediaStore20170901CreateContainer,
};

sdk.createContainer(req).then((res: CreateContainerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->