<!-- Start SDK Example Usage -->
```typescript
import {
  CinemaSearchReadRequest,
  CinemaSearchReadResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CinemaSearchReadRequest = {
  id: "corrupti",
};

sdk.cinema.cinemaSearchRead(req).then((res: CinemaSearchReadResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->