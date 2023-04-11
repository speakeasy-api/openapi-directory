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
  addTagsToResourceRequest: {
    resourceArn: "corrupti",
    tagList: [
      {
        key: "distinctio",
        value: "quibusdam",
      },
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
    ],
  },
  xAmzAlgorithm: "vel",
  xAmzContentSha256: "error",
  xAmzCredential: "deserunt",
  xAmzDate: "suscipit",
  xAmzSecurityToken: "iure",
  xAmzSignature: "magnam",
  xAmzSignedHeaders: "debitis",
  xAmzTarget: AddTagsToResourceXAmzTargetEnum.CloudHsmFrontendServiceAddTagsToResource,
};

sdk.addTagsToResource(req).then((res: AddTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->