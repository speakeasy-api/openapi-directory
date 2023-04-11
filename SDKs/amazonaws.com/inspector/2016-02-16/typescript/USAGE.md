<!-- Start SDK Example Usage -->
```typescript
import {
  AddAttributesToFindingsRequest,
  AddAttributesToFindingsResponse,
  AddAttributesToFindingsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddAttributesToFindingsRequest = {
  addAttributesToFindingsRequest: {
    attributes: [
      {
        key: "provident",
        value: "distinctio",
      },
      {
        key: "quibusdam",
        value: "unde",
      },
      {
        key: "nulla",
        value: "corrupti",
      },
    ],
    findingArns: [
      "vel",
      "error",
      "deserunt",
      "suscipit",
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
  xAmzTarget: AddAttributesToFindingsXAmzTargetEnum.InspectorServiceAddAttributesToFindings,
};

sdk.addAttributesToFindings(req).then((res: AddAttributesToFindingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->