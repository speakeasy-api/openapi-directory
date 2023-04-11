<!-- Start SDK Example Usage -->
```typescript
import {
  CreateByteMatchSetRequest,
  CreateByteMatchSetResponse,
  CreateByteMatchSetXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateByteMatchSetRequest = {
  createByteMatchSetRequest: {
    changeToken: "corrupti",
    name: "provident",
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: CreateByteMatchSetXAmzTargetEnum.AWSWAF20150824CreateByteMatchSet,
};

sdk.createByteMatchSet(req).then((res: CreateByteMatchSetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->