<!-- Start SDK Example Usage -->
```typescript
import {
  CustomersAllRequest,
  CustomersAllResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CustomersAllRequest = {
  cursor: "corrupti",
  fields: "provident",
  filter: {
    email: "elon@musk.com",
    phoneNumber: "111-111-1111",
  },
  limit: 715190,
  raw: false,
  xApideckAppId: "quibusdam",
  xApideckConsumerId: "unde",
  xApideckServiceId: "nulla",
};

sdk.customers.customersAll(req).then((res: CustomersAllResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->