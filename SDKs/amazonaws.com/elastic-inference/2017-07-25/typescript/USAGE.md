<!-- Start SDK Example Usage -->
```typescript
import {
  DescribeAcceleratorOfferingsRequest,
  DescribeAcceleratorOfferingsResponse,
  DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: DescribeAcceleratorOfferingsRequest = {
  requestBody: {
    acceleratorTypes: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    locationType: DescribeAcceleratorOfferingsRequestBodyLocationTypeEnum.AvailabilityZone,
  },
  xAmzAlgorithm: "nulla",
  xAmzContentSha256: "corrupti",
  xAmzCredential: "illum",
  xAmzDate: "vel",
  xAmzSecurityToken: "error",
  xAmzSignature: "deserunt",
  xAmzSignedHeaders: "suscipit",
};

sdk.describeAcceleratorOfferings(req).then((res: DescribeAcceleratorOfferingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->