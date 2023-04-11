<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCloudFrontOriginAccessIdentity20170325Request,
  CreateCloudFrontOriginAccessIdentity20170325Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCloudFrontOriginAccessIdentity20170325Request = {
  requestBody: "corrupti".encode(),
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.createCloudFrontOriginAccessIdentity20170325(req).then((res: CreateCloudFrontOriginAccessIdentity20170325Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->