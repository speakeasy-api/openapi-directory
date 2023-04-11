<!-- Start SDK Example Usage -->
```typescript
import {
  GetMediaRequest,
  GetMediaResponse
} from "openapi/dist/sdk/models/operations";
import {
  StartSelectorTypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetMediaRequest = {
  requestBody: {
    startSelector: {
      afterFragmentNumber: "corrupti",
      continuationToken: "provident",
      startSelectorType: StartSelectorTypeEnum.Earliest,
      startTimestamp: "2021-03-11T23:22:42.658Z",
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

sdk.getMedia(req).then((res: GetMediaResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->