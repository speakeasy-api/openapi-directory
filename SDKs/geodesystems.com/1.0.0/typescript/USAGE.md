<!-- Start SDK Example Usage -->
```typescript
import {
  MediaTabularExtractsheetRequest,
  MediaTabularExtractsheetResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MediaTabularExtractsheetRequest = {
  arg1: "corrupti",
  entryid: "provident",
  output: "distinctio",
};

sdk.serviceMediaTabularExtractsheet.mediaTabularExtractsheet(req).then((res: MediaTabularExtractsheetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->