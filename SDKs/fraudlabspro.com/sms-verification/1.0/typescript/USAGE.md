<!-- Start SDK Example Usage -->
```typescript
import {
  GetV1VerificationResultRequest,
  GetV1VerificationResultResponse,
  GetV1VerificationResultFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetV1VerificationResultRequest = {
  format: GetV1VerificationResultFormatEnum.Xml,
  key: "provident",
  otp: "distinctio",
  tranId: "quibusdam",
};

sdk.getV1VerificationResult(req).then((res: GetV1VerificationResultResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->