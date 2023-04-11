<!-- Start SDK Example Usage -->
```typescript
import {
  GetContentAspectIdRequest,
  GetContentAspectIdResponse,
  GetContentAspectIDAspectIDEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetContentAspectIdRequest = {
  aspectId: GetContentAspectIDAspectIDEnum.Oic,
};

sdk.content.getContentAspectId(req).then((res: GetContentAspectIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->