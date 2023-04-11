<!-- Start SDK Example Usage -->
```typescript
import {
  GetEntitlementsRequest,
  GetEntitlementsResponse,
  GetEntitlementsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetEntitlementsRequest = {
  getEntitlementsRequest: {
    filter: {
      "provident": [
        "quibusdam",
        "unde",
        "nulla",
      ],
      "corrupti": [
        "vel",
        "error",
        "deserunt",
        "suscipit",
      ],
      "iure": [
        "debitis",
        "ipsa",
      ],
    },
    maxResults: 963663,
    nextToken: "tempora",
    productCode: "suscipit",
  },
  xAmzAlgorithm: "molestiae",
  xAmzContentSha256: "minus",
  xAmzCredential: "placeat",
  xAmzDate: "voluptatum",
  xAmzSecurityToken: "iusto",
  xAmzSignature: "excepturi",
  xAmzSignedHeaders: "nisi",
  xAmzTarget: GetEntitlementsXAmzTargetEnum.AWSMPEntitlementServiceGetEntitlements,
};

sdk.getEntitlements(req).then((res: GetEntitlementsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->