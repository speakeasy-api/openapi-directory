<!-- Start SDK Example Usage -->
```typescript
import {
  GetCompaniesCompanyIdApiCredentialsRequest,
  GetCompaniesCompanyIdApiCredentialsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetCompaniesCompanyIdApiCredentialsRequest = {
  companyId: "corrupti",
  pageNumber: 592845,
  pageSize: 715190,
};

sdk.apiCredentialsCompanyLevel.getCompaniesCompanyIdApiCredentials(req).then((res: GetCompaniesCompanyIdApiCredentialsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->