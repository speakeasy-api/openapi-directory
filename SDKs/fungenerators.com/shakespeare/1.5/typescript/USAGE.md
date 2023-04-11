<!-- Start SDK Example Usage -->
```typescript
import {
  GetShakespeareGenerateInsultRequest,
  GetShakespeareGenerateInsultResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetShakespeareGenerateInsultRequest = {
  limit: 548814,
};

sdk.generation.getShakespeareGenerateInsult(req).then((res: GetShakespeareGenerateInsultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->