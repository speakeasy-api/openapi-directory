<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeServicesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeServicesRequest = {
  describeServicesRequest: {
    formatVersion: "corrupti",
    maxResults: 592845,
    nextToken: "distinctio",
    serviceCode: "quibusdam",
  },
  maxResults: "unde",
  nextToken: "nulla",
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
  xAmzTarget: DescribeServicesXAmzTargetEnum.AWSPriceListServiceDescribeServices,
};

sdk.describeServices(req).then((res: DescribeServicesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->