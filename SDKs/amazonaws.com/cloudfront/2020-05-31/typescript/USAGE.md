<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateAlias20200531Request,
  AssociateAlias20200531Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateAlias20200531Request = {
  alias: "corrupti",
  targetDistributionId: "provident",
  xAmzAlgorithm: "distinctio",
  xAmzContentSha256: "quibusdam",
  xAmzCredential: "unde",
  xAmzDate: "nulla",
  xAmzSecurityToken: "corrupti",
  xAmzSignature: "illum",
  xAmzSignedHeaders: "vel",
};

sdk.associateAlias20200531(req).then((res: AssociateAlias20200531Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->