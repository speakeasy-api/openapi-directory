<!-- Start SDK Example Usage -->
```typescript
import {
  CreateHttpNamespaceRequest,
  CreateHttpNamespaceResponse,
  CreateHttpNamespaceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateHttpNamespaceRequest = {
  createHttpNamespaceRequest: {
    creatorRequestId: "corrupti",
    description: "provident",
    name: "distinctio",
    tags: [
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        value: "error",
      },
      {
        key: "deserunt",
        value: "suscipit",
      },
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: CreateHttpNamespaceXAmzTargetEnum.Route53AutoNamingV20170314CreateHttpNamespace,
};

sdk.createHttpNamespace(req).then((res: CreateHttpNamespaceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->