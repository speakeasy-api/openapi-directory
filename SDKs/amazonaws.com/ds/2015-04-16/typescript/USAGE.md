<!-- Start SDK Example Usage -->
```typescript
import {
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResponse,
  AcceptSharedDirectoryXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AcceptSharedDirectoryRequest = {
  acceptSharedDirectoryRequest: {
    sharedDirectoryId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: AcceptSharedDirectoryXAmzTargetEnum.DirectoryService20150416AcceptSharedDirectory,
};

sdk.acceptSharedDirectory(req).then((res: AcceptSharedDirectoryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->