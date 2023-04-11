<!-- Start SDK Example Usage -->
```typescript
import {
  CreateSignalingChannelRequest,
  CreateSignalingChannelResponse,
  CreateSignalingChannelRequestBodyChannelTypeEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: CreateSignalingChannelRequest = {
  requestBody: {
    channelName: "corrupti",
    channelType: CreateSignalingChannelRequestBodyChannelTypeEnum.FullMesh,
    singleMasterConfiguration: {
      messageTtlSeconds: 715190,
    },
    tags: [
      {
        key: "unde",
        value: "nulla",
      },
      {
        key: "corrupti",
        value: "illum",
      },
      {
        key: "vel",
        value: "error",
      },
      {
        key: "deserunt",
        value: "suscipit",
      },
    ],
  },
  xAmzAlgorithm: "iure",
  xAmzContentSha256: "magnam",
  xAmzCredential: "debitis",
  xAmzDate: "ipsa",
  xAmzSecurityToken: "delectus",
  xAmzSignature: "tempora",
  xAmzSignedHeaders: "suscipit",
};

sdk.createSignalingChannel(req).then((res: CreateSignalingChannelResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->