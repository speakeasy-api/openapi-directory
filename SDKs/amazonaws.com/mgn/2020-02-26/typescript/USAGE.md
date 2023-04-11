<!-- Start SDK Example Usage -->
```typescript
import {
  ArchiveApplicationRequest,
  ArchiveApplicationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: ArchiveApplicationRequest = {
  requestBody: {
    applicationID: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.archiveApplication(req).then((res: ArchiveApplicationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->