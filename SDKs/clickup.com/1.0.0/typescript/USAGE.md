<!-- Start SDK Example Usage -->
```typescript
import {
  CreateANewQuestionRequestBody,
  CreateANewQuestionResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: CreateANewQuestionRequestBody = {
  choices: [
    "provident",
    "distinctio",
    "quibusdam",
  ],
  question: "unde",
};

sdk.createANewQuestion(req).then((res: CreateANewQuestionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->