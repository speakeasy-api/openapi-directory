<!-- Start SDK Example Usage -->
```typescript
import {
  CompanyAlternativeSearchRequest,
  CompanyAlternativeSearchResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CompanyAlternativeSearchRequest = {
  requestBody: {
    address: "5786 Little Streets",
    name: "vel",
    number: "error",
    phone: "1-542-909-2347 x8545",
    url: "nisi",
    vat: "recusandae",
  },
  country: "temporibus",
};

sdk.v1Company.companyAlternativeSearch(req).then((res: CompanyAlternativeSearchResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->