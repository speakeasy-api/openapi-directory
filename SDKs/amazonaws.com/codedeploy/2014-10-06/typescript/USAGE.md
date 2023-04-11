<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsToOnPremisesInstancesRequest,
  AddTagsToOnPremisesInstancesResponse,
  AddTagsToOnPremisesInstancesXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsToOnPremisesInstancesRequest = {
  addTagsToOnPremisesInstancesInput: {
    instanceNames: [
      "provident",
      "distinctio",
      "quibusdam",
    ],
    tags: [
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
      {
        key: "error",
        value: "deserunt",
      },
    ],
  },
  xAmzAlgorithm: "suscipit",
  xAmzContentSha256: "iure",
  xAmzCredential: "magnam",
  xAmzDate: "debitis",
  xAmzSecurityToken: "ipsa",
  xAmzSignature: "delectus",
  xAmzSignedHeaders: "tempora",
  xAmzTarget: AddTagsToOnPremisesInstancesXAmzTargetEnum.CodeDeploy20141006AddTagsToOnPremisesInstances,
};

sdk.addTagsToOnPremisesInstances(req).then((res: AddTagsToOnPremisesInstancesResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->