<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { SrcSearchlyApiV1ControllersSimilarityByContentRequest, SrcSearchlyApiV1ControllersSimilarityByContentResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SrcSearchlyApiV1ControllersSimilarityByContentRequest = {
  request: {
    content: "sit",
  },
};

sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req).then((res: SrcSearchlyApiV1ControllersSimilarityByContentResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->