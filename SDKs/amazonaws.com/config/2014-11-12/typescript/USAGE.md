<!-- Start SDK Example Usage -->
```typescript
import {
  BatchGetAggregateResourceConfigRequest,
  BatchGetAggregateResourceConfigResponse,
  BatchGetAggregateResourceConfigXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ResourceTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: BatchGetAggregateResourceConfigRequest = {
  batchGetAggregateResourceConfigRequest: {
    configurationAggregatorName: "corrupti",
    resourceIdentifiers: [
      {
        resourceId: "distinctio",
        resourceName: "quibusdam",
        resourceType: ResourceTypeEnum.AWSDataSyncLocationNFS,
        sourceAccountId: "nulla",
        sourceRegion: "corrupti",
      },
      {
        resourceId: "illum",
        resourceName: "vel",
        resourceType: ResourceTypeEnum.AWSGuardDutyIPSet,
        sourceAccountId: "deserunt",
        sourceRegion: "suscipit",
      },
      {
        resourceId: "iure",
        resourceName: "magnam",
        resourceType: ResourceTypeEnum.AWSIoTSiteWiseDashboard,
        sourceAccountId: "ipsa",
        sourceRegion: "delectus",
      },
    ],
  },
  xAmzAlgorithm: "tempora",
  xAmzContentSha256: "suscipit",
  xAmzCredential: "molestiae",
  xAmzDate: "minus",
  xAmzSecurityToken: "placeat",
  xAmzSignature: "voluptatum",
  xAmzSignedHeaders: "iusto",
  xAmzTarget: BatchGetAggregateResourceConfigXAmzTargetEnum.StarlingDoveServiceBatchGetAggregateResourceConfig,
};

sdk.batchGetAggregateResourceConfig(req).then((res: BatchGetAggregateResourceConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->