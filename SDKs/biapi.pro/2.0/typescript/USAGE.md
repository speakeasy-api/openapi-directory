<!-- Start SDK Example Usage -->
```typescript
import {
  DeleteClientsIdClientRequest,
  DeleteClientsIdClientResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DeleteClientsIdClientRequest = {
  expand: "corrupti",
  idClient: 592845,
};

sdk.administration.deleteClientsIdClient(req).then((res: DeleteClientsIdClientResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->