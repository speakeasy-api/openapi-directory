<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeReportCreationRequest,
  DescribeReportCreationResponse,
  DescribeReportCreationXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeReportCreationRequest = {
  requestBody: {
    "provident": "distinctio",
    "quibusdam": "unde",
    "nulla": "corrupti",
  },
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
  xAmzTarget: DescribeReportCreationXAmzTargetEnum.ResourceGroupsTaggingAPI20170126DescribeReportCreation,
};

sdk.describeReportCreation(req).then((res: DescribeReportCreationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->