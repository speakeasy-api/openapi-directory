<!-- Start SDK Example Usage -->
```typescript
import {
  GETDecodeAuthorizationMessageRequest,
  GETDecodeAuthorizationMessageResponse,
  GETDecodeAuthorizationMessageActionEnum,
  GETDecodeAuthorizationMessageVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETDecodeAuthorizationMessageRequest = {
  action: GETDecodeAuthorizationMessageActionEnum.DecodeAuthorizationMessage,
  encodedMessage: "corrupti",
  version: GETDecodeAuthorizationMessageVersionEnum.TwoThousandAndEleven0615,
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.getDecodeAuthorizationMessage(req).then((res: GETDecodeAuthorizationMessageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->