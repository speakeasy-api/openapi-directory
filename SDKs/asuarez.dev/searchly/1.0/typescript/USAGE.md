<!-- Start SDK Example Usage -->
```typescript
import {
  SrcSearchlyApiV1ControllersSimilarityByContentRequestBody,
  SrcSearchlyApiV1ControllersSimilarityByContentResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: SrcSearchlyApiV1ControllersSimilarityByContentRequestBody = {
  content: "corrupti",
};

sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req).then((res: SrcSearchlyApiV1ControllersSimilarityByContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->