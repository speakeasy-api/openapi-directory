<!-- Start SDK Example Usage -->
```typescript
import {
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse,
  CopyBackupToRegionXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CopyBackupToRegionRequest = {
  copyBackupToRegionRequest: {
    backupId: "corrupti",
    destinationRegion: "provident",
    tagList: [
      {
        key: "quibusdam",
        value: "unde",
      },
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
    ],
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: CopyBackupToRegionXAmzTargetEnum.BaldrApiServiceCopyBackupToRegion,
};

sdk.copyBackupToRegion(req).then((res: CopyBackupToRegionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->