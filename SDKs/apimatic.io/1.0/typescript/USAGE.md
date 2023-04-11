<!-- Start SDK Example Usage -->
```typescript
import {
  ConvertAPIRequest,
  ConvertAPIResponse,
  ConvertAPIFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ConvertAPIRequest = {
  requestBody: {
    url: "corrupti",
  },
  format: ConvertAPIFormatEnum.Wadl2009,
};

sdk.convertAPI(req).then((res: ConvertAPIResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->