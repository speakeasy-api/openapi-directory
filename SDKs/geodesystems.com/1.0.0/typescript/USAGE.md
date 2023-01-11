<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { MediaTabularExtractsheetRequest, MediaTabularExtractsheetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MediaTabularExtractsheetRequest = {
  queryParams: {
    arg1: "sit",
    entryid: "voluptas",
    output: "culpa",
  },
};

sdk.serviceMediaTabularExtractsheet.mediaTabularExtractsheet(req).then((res: MediaTabularExtractsheetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->