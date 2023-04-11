<!-- Start SDK Example Usage -->
```typescript
import {
  CreateHomeRegionControlRequest,
  CreateHomeRegionControlResponse,
  CreateHomeRegionControlXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  TargetTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateHomeRegionControlRequest = {
  createHomeRegionControlRequest: {
    dryRun: false,
    homeRegion: "corrupti",
    target: {
      id: "provident",
      type: TargetTypeEnum.Account,
    },
  },
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
  xAmzTarget: CreateHomeRegionControlXAmzTargetEnum.AWSMigrationHubMultiAccountServiceCreateHomeRegionControl,
};

sdk.createHomeRegionControl(req).then((res: CreateHomeRegionControlResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->