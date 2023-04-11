<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteProxyRequest,
  DeleteProxyResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteProxyRequest = {
  xApideckAppId: "corrupti",
  xApideckConsumerId: "provident",
  xApideckDownstreamAuthorization: "distinctio",
  xApideckDownstreamUrl: "quibusdam",
  xApideckServiceId: "unde",
};

sdk.execute.deleteProxy(req).then((res: DeleteProxyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->