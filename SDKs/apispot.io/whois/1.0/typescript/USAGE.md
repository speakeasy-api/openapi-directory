<!-- Start SDK Example Usage -->
```typescript
import {
  CheckDomainRequest,
  CheckDomainResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKeyAuth: "YOUR_API_KEY_HERE",
  },
});

const req: CheckDomainRequest = {
  domain: "corrupti",
};

sdk.checkDomain(req).then((res: CheckDomainResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->