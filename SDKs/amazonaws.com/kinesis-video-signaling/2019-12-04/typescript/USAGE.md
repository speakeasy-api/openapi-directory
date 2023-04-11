<!-- Start SDK Example Usage -->
```typescript
import {
  GetIceServerConfigRequest,
  GetIceServerConfigResponse,
  GetIceServerConfigRequestBodyServiceEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GetIceServerConfigRequest = {
  requestBody: {
    channelARN: "corrupti",
    clientId: "provident",
    service: GetIceServerConfigRequestBodyServiceEnum.Turn,
    username: "Micheal_Sporer",
  },
  xAmzAlgorithm: "corrupti",
  xAmzContentSha256: "illum",
  xAmzCredential: "vel",
  xAmzDate: "error",
  xAmzSecurityToken: "deserunt",
  xAmzSignature: "suscipit",
  xAmzSignedHeaders: "iure",
};

sdk.getIceServerConfig(req).then((res: GetIceServerConfigResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->