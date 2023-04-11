<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsToResourceRequest,
  AddTagsToResourceResponse,
  AddTagsToResourceXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";
import {
  ResourceTypeForTaggingEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsToResourceRequest = {
  addTagsToResourceRequest: {
    resourceId: "corrupti",
    resourceType: ResourceTypeForTaggingEnum.OpsItem,
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
  xAmzTarget: AddTagsToResourceXAmzTargetEnum.AmazonSSMAddTagsToResource,
};

sdk.addTagsToResource(req).then((res: AddTagsToResourceResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->