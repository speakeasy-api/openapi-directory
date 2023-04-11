<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsRequest,
  AddTagsResponse,
  AddTagsXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsRequest = {
  addTagsRequest: {
    resourceId: "corrupti",
    tagsList: [
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
  xAmzTarget: AddTagsXAmzTargetEnum.ComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags,
};

sdk.addTags(req).then((res: AddTagsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->