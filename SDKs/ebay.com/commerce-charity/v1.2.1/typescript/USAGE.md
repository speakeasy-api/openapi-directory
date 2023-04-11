<!-- Start SDK Example Usage -->
```typescript
import {
  GetCharityOrgRequest,
  GetCharityOrgResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCharityOrgRequest = {
  xEbayCMarketplaceId: "corrupti",
  charityOrgId: "provident",
};

sdk.charityOrg.getCharityOrg(req).then((res: GetCharityOrgResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->