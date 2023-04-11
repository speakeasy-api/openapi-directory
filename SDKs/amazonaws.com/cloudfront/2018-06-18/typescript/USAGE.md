<!-- Start SDK Example Usage -->
```typescript
import {
  CreateCloudFrontOriginAccessIdentity20180618Request,
  CreateCloudFrontOriginAccessIdentity20180618Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateCloudFrontOriginAccessIdentity20180618Request = {
  requestBody: "corrupti".encode(),
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.createCloudFrontOriginAccessIdentity20180618(req).then((res: CreateCloudFrontOriginAccessIdentity20180618Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->