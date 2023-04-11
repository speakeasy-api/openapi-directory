<!-- Start SDK Example Usage -->
```typescript
import {
  GetPirateGenerateInsultRequest,
  GetPirateGenerateInsultResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetPirateGenerateInsultRequest = {
  limit: 548814,
};

sdk.generation.getPirateGenerateInsult(req).then((res: GetPirateGenerateInsultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->