<!-- Start SDK Example Usage -->
```typescript
import {
  FilterFileDataStoppingsRequest,
  FilterFileDataStoppingsResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: FilterFileDataStoppingsRequest = {
  requestBody: {
    file: {
      content: "corrupti".encode(),
      file: "provident",
    },
  },
  type: "distinctio",
};

sdk.exude.filterFileDataStoppings(req).then((res: FilterFileDataStoppingsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->