<!-- Start SDK Example Usage -->
```typescript
import {
  shared.TranslateRequest,
  TranslateResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.TranslateRequest = {
  from: "corrupti",
  text: [
    "distinctio",
    "quibusdam",
    "unde",
  ],
  to: "nulla",
  translationContext: "corrupti",
};

sdk.language.translate(req).then((res: TranslateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->