<!-- Start SDK Example Usage -->
```typescript
import {
  GETDeleteListenerRequest,
  GETDeleteListenerResponse,
  GETDeleteListenerActionEnum,
  GETDeleteListenerVersionEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: GETDeleteListenerRequest = {
  action: GETDeleteListenerActionEnum.DeleteListener,
  listenerArn: "corrupti",
  version: GETDeleteListenerVersionEnum.TwoThousandAndFifteen1201,
  xAmzAlgorithm: "provident",
  xAmzContentSha256: "distinctio",
  xAmzCredential: "quibusdam",
  xAmzDate: "unde",
  xAmzSecurityToken: "nulla",
  xAmzSignature: "corrupti",
  xAmzSignedHeaders: "illum",
};

sdk.getDeleteListener(req).then((res: GETDeleteListenerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->