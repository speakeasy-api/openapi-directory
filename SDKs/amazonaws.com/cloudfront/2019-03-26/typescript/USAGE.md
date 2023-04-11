<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCloudFrontOriginAccessIdentity20190326Request,
  CreateCloudFrontOriginAccessIdentity20190326Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCloudFrontOriginAccessIdentity20190326Request = {
  requestBody: "corrupti".encode(),
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.createCloudFrontOriginAccessIdentity20190326(req).then((res: CreateCloudFrontOriginAccessIdentity20190326Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->