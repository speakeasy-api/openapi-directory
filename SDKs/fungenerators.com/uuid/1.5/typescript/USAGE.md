<!-- Start SDK Example Usage -->
```typescript
import {
  GetUuidRequest,
  GetUuidResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetUuidRequest = {
  count: 548814,
};

sdk.uuidGeneration.getUuid(req).then((res: GetUuidResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->