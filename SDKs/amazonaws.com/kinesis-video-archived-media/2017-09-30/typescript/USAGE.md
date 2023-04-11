<!-- Start SDK Example Usage -->
```typescript
import {
  GetClipRequest,
  GetClipResponse
} from "openapi/dist/sdk/models/operations";
import {
  ClipFragmentSelectorTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetClipRequest = {
  requestBody: {
    clipFragmentSelector: {
      fragmentSelectorType: ClipFragmentSelectorTypeEnum.ServerTimestamp,
      timestampRange: {
        endTimestamp: "2021-07-27T21:52:56.087Z",
        startTimestamp: "2021-03-11T23:22:42.658Z",
      },
    },
    streamARN: "nulla",
    streamName: "corrupti",
  },
  xAmzAlgorithm: "illum",
  xAmzContentSha256: "vel",
  xAmzCredential: "error",
  xAmzDate: "deserunt",
  xAmzSecurityToken: "suscipit",
  xAmzSignature: "iure",
  xAmzSignedHeaders: "magnam",
};

sdk.getClip(req).then((res: GetClipResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->