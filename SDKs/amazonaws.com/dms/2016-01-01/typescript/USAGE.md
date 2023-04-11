<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsToResourceRequest,
  AddTagsToResourceResponse,
  AddTagsToResourceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsToResourceRequest = {
  addTagsToResourceMessage: {
    resourceArn: "corrupti",
    tags: [
      {
        key: "distinctio",
        resourceArn: "quibusdam",
        value: "unde",
      },
      {
        key: "nulla",
        resourceArn: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        resourceArn: "error",
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
  xAmzTarget: AddTagsToResourceXAmzTargetEnum.AmazonDMSv20160101AddTagsToResource,
};

sdk.addTagsToResource(req).then((res: AddTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->