<!-- Start SDK Example Usage -->
```typescript
import {
  DoctorsListRequest,
  DoctorsListResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DoctorsListRequest = {
  cursor: "corrupti",
  doctor: 592845,
  pageSize: 715190,
};

sdk.administrative.doctorsList(req).then((res: DoctorsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->