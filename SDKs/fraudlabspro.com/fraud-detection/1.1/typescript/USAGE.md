<!-- Start SDK Example Usage -->
```typescript
import {
  PostV1OrderFeedbackRequest,
  PostV1OrderFeedbackResponse,
  PostV1OrderFeedbackActionEnum,
  PostV1OrderFeedbackFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: PostV1OrderFeedbackRequest = {
  action: PostV1OrderFeedbackActionEnum.Reject,
  format: PostV1OrderFeedbackFormatEnum.Xml,
  id: "distinctio",
  key: "quibusdam",
  notes: "unde",
};

sdk.postV1OrderFeedback(req).then((res: PostV1OrderFeedbackResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->