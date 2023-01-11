<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { PostV1OrderFeedbackRequest, PostV1OrderFeedbackResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: PostV1OrderFeedbackRequest = {
  queryParams: {
    action: "APPROVE",
    format: "json",
    id: "culpa",
    key: "expedita",
    notes: "consequuntur",
  },
};

sdk.postV1OrderFeedback(req).then((res: PostV1OrderFeedbackResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->