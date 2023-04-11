<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCloudFrontOriginAccessIdentity20161125Request,
  CreateCloudFrontOriginAccessIdentity20161125Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCloudFrontOriginAccessIdentity20161125Request = {
  requestBody: "corrupti".encode(),
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.createCloudFrontOriginAccessIdentity20161125(req).then((res: CreateCloudFrontOriginAccessIdentity20161125Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->