<!-- Start SDK Example Usage -->
```typescript
import {
  ImageOcrImageLinesWithLocationRequest,
  ImageOcrImageLinesWithLocationResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: ImageOcrImageLinesWithLocationRequest = {
  requestBody: {
    imageFile: {
      content: "corrupti".encode(),
      imageFile: "provident",
    },
  },
  language: "distinctio",
  preprocessing: "quibusdam",
};

sdk.imageOcr.imageOcrImageLinesWithLocation(req).then((res: ImageOcrImageLinesWithLocationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->