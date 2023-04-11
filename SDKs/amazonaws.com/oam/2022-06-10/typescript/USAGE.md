<!-- Start SDK Example Usage -->
```typescript
import {
  CreateLinkRequest,
  CreateLinkResponse
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

const req: CreateLinkRequest = {
  requestBody: {
    labelTemplate: "corrupti",
    resourceTypes: [
      ResourceTypeEnum.AWSXRayTrace,
      ResourceTypeEnum.AWSXRayTrace,
      ResourceTypeEnum.AWSLogsLogGroup,
    ],
    sinkIdentifier: "nulla",
    tags: {
      "illum": "vel",
      "error": "deserunt",
      "suscipit": "iure",
    },
  },
  xAmzAlgorithm: "magnam",
  xAmzContentSha256: "debitis",
  xAmzCredential: "ipsa",
  xAmzDate: "delectus",
  xAmzSecurityToken: "tempora",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "molestiae",
};

sdk.createLink(req).then((res: CreateLinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->