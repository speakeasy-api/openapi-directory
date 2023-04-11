<!-- Start SDK Example Usage -->
```typescript
import {
  GetRawMessageContentRequest,
  GetRawMessageContentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetRawMessageContentRequest = {
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "provident",
  xAmzCredential: "distinctio",
  xAmzDate: "quibusdam",
  xAmzSecurityToken: "unde",
  xAmzSignature: "nulla",
  xAmzSignedHeaders: "corrupti",
  messageId: "illum",
};

sdk.getRawMessageContent(req).then((res: GetRawMessageContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->