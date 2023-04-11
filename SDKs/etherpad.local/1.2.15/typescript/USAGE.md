<!-- Start SDK Example Usage -->
```typescript
import {
  AppendTextUsingGETRequest,
  AppendTextUsingGETResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    apiKey: "YOUR_API_KEY_HERE",
  },
});

const req: AppendTextUsingGETRequest = {
  padID: "corrupti",
  text: "provident",
};

sdk.appendTextUsingGET(req).then((res: AppendTextUsingGETResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->