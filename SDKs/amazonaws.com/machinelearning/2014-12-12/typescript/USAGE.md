<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsRequest,
  AddTagsResponse,
  AddTagsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  TaggableResourceTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsRequest = {
  addTagsInput: {
    resourceId: "corrupti",
    resourceType: TaggableResourceTypeEnum.Evaluation,
    tags: [
      {
        key: "quibusdam",
        value: "unde",
      },
      {
        key: "nulla",
        value: "corrupti",
      },
      {
        key: "illum",
        value: "vel",
      },
    ],
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: AddTagsXAmzTargetEnum.AmazonML20141212AddTags,
};

sdk.addTags(req).then((res: AddTagsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->