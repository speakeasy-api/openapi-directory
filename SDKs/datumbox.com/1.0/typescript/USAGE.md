<!-- Start SDK Example Usage -->
```typescript
import {
  AdultContentDetectionRequestBody,
  AdultContentDetectionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: AdultContentDetectionRequestBody = {
  apiKey: "corrupti",
  text: "provident",
};

sdk.documentClassification.adultContentDetection(req).then((res: AdultContentDetectionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->