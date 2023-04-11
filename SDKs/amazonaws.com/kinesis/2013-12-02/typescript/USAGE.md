<!-- Start SDK Example Usage -->
```typescript
import {
  AddTagsToStreamRequest,
  AddTagsToStreamResponse,
  AddTagsToStreamXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AddTagsToStreamRequest = {
  addTagsToStreamInput: {
    streamARN: "corrupti",
    streamName: "provident",
    tags: {
      "quibusdam": "unde",
      "nulla": "corrupti",
      "illum": "vel",
    },
  },
  xAmzAlgorithm: "error",
  xAmzContentSha256: "deserunt",
  xAmzCredential: "suscipit",
  xAmzDate: "iure",
  xAmzSecurityToken: "magnam",
  xAmzSignature: "debitis",
  xAmzSignedHeaders: "ipsa",
  xAmzTarget: AddTagsToStreamXAmzTargetEnum.Kinesis20131202AddTagsToStream,
};

sdk.addTagsToStream(req).then((res: AddTagsToStreamResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->