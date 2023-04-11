<!-- Start SDK Example Usage -->
```typescript
import {
  BulkPublishRequest,
  BulkPublishResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BulkPublishRequest = {
  identityPoolId: "corrupti",
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.bulkPublish(req).then((res: BulkPublishResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->