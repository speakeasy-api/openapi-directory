<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeEntitiesDetectionV2JobRequest,
  DescribeEntitiesDetectionV2JobResponse,
  DescribeEntitiesDetectionV2JobXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeEntitiesDetectionV2JobRequest = {
  describeEntitiesDetectionV2JobRequest: {
    jobId: "corrupti",
  },
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
  xAmzTarget: DescribeEntitiesDetectionV2JobXAmzTargetEnum.ComprehendMedical20181030DescribeEntitiesDetectionV2Job,
};

sdk.describeEntitiesDetectionV2Job(req).then((res: DescribeEntitiesDetectionV2JobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->