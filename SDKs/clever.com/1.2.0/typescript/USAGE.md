<!-- Start SDK Example Usage -->
```typescript
import {
  GetContactRequest,
  GetContactResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: GetContactRequest = {
  id: "corrupti",
};

sdk.contacts.getContact(req).then((res: GetContactResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->